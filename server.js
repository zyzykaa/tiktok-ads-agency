import express from 'express';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3001;

// Setup database
const db = new Database('contacts.db');

// Create table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    budget TEXT NOT NULL,
    businessType TEXT NOT NULL,
    goals TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

app.use(express.json());

import 'dotenv/config';
import contactHandler from './api/contact.js';

// API Endpoint to submit contact form (Local routing to Serverless function logic)
app.post('/api/contact', async (req, res) => {
  await contactHandler(req, res);
});

// AI Policy Scan (Gemini) with safe fallback handling on the client
app.post('/api/policy-scan', async (req, res) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
    const text = String(req.body?.text || '').slice(0, 8000);

    if (!apiKey) {
      return res.status(503).json({ error: 'AI_UNAVAILABLE' });
    }

    if (!text.trim()) {
      return res.status(400).json({ error: 'EMPTY_TEXT' });
    }

    const prompt = `
You are a TikTok Ads compliance assistant. Analyze the ad copy and return STRICT JSON only.
If risky phrases exist, list them with category, risk (Critical/High/Medium), reason, and a safer alternative.
If no issues, return an empty issues array and status "safe".

Return JSON with this shape:
{
  "status": "safe" | "risky",
  "summary": "short sentence",
  "issues": [
    {
      "phrase": "string",
      "category": "string",
      "risk": "Critical" | "High" | "Medium",
      "reason": "string",
      "safe_alternative": "string"
    }
  ]
}

Ad copy:
"""${text}"""
`;

    const tryModels = [model, 'gemini-2.0-flash', 'gemini-2.0-flash-001'];
    let response;
    for (const m of tryModels) {
      response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: prompt }] }
          ],
          generationConfig: {
            temperature: 0.2,
            topP: 0.9,
            maxOutputTokens: 512
          }
        })
      });
      if (response.ok) break;
      if (response.status !== 404) break;
    }

    if (!response.ok) {
      const errText = await response.text();
      console.error('Gemini API error:', response.status, errText);
      return res.status(502).json({ error: 'AI_ERROR', status: response.status });
    }

    const data = await response.json();
    const textOut = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    let parsed;
    try {
      parsed = JSON.parse(textOut);
    } catch (e) {
      console.error('Gemini parse error:', textOut);
      return res.status(502).json({ error: 'AI_PARSE_ERROR' });
    }

    return res.json(parsed);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'AI_ERROR' });
  }
});

// For basic health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Redirect old calculator route to new tool path
app.get('/calculator', (req, res) => {
  res.redirect(301, '/tool/calculator');
});

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';
  const root = process.cwd();

  if (isProduction) {
    app.use(express.static(`${root}/dist/client`));
  } else {
    // Vite integration
    const vite = await import('vite');
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true }
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }

  // Vike middleware
  app.get('*', async (req, res, next) => {
    try {
      if (req.originalUrl.startsWith('/api')) {
        return next();
      }
      const { renderPage } = await import('vike/server');
      const pageContextInit = { urlOriginal: req.originalUrl };
      const pageContext = await renderPage(pageContextInit);
      if (pageContext.httpResponse) {
        const { body, statusCode, headers } = pageContext.httpResponse;
        headers.forEach(([name, value]) => res.setHeader(name, value));
        res.status(statusCode).send(body);
      } else {
        next();
      }
    } catch (e) {
      if (!isProduction) {
        const vite = await import('vite');
        // Vite handles errors in dev
      } else {
        console.error(e);
      }
      next(e);
    }
  });

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Network access enabled at http://192.168.1.6:${port}`);
  });
}

startServer();
