import type { APIRoute } from 'astro';

// Generated at build time → /robots.txt, with an absolute Sitemap URL from `site`.
export const GET: APIRoute = ({ site }) => {
  const sitemap = site ? new URL('sitemap-index.xml', site).href : '/sitemap-index.xml';
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
