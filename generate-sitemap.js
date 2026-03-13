import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://your-tiktok-agency.com';

const routes = [
  '/',
  '/services',
  '/pricing',
  '/case-studies',
  '/blog',
  '/contact'
];

const generateSitemap = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = routes.map(route => `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemap, 'utf8');
  console.log('✅ sitemap.xml generated successfully at', outputPath);
};

generateSitemap();
