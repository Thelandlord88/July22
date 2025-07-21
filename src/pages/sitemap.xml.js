import { suburbs } from '../utils/geoHandler.js';

export const prerender = false;

export function GET({ request }) {
  const baseUrl = new URL(request.url).origin;
  const urls = [
    `${baseUrl}/`,
    ...suburbs.map(s => `${baseUrl}/bond-cleaning/${s.slug}/`)
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n') +
    `\n</urlset>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
