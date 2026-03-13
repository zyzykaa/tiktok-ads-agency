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

// API Endpoint to submit contact form
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, budget, businessType, goals } = req.body;
    
    // Basic validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and Email are required' });
    }

    const insert = db.prepare(`
      INSERT INTO contacts (name, email, budget, businessType, goals)
      VALUES (?, ?, ?, ?, ?)
    `);
    
    const info = insert.run(name, email, budget, businessType, goals);

    res.status(201).json({ 
      success: true, 
      id: info.lastInsertRowid,
      message: 'Contact inquiry saved successfully.'
    });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
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

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();
