const fs = require('fs');
const path = require('path');

const baseUrl = 'https://etoma.dev';

// Add all your site's main pages here
const pages = [
  '/',
  '/about',
  '/skills',
  '/projects',
  '/portfolio',
  '/testimonials',
  '/contact',
];

// Generate sitemap XML content
function generateSitemapXml(pages) {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${page}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

// Write the sitemap to the public directory
const sitemap = generateSitemapXml(pages);
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);
console.log(`Sitemap generated at ${sitemapPath}`); 