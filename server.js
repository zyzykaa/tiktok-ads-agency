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

// For basic health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
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
