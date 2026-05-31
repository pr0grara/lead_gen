import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output (default) → ./dist for Cloudflare Pages.
// `site` is the canonical base for URLs + the generated sitemap.
// Keep this in sync with SITE.url in src/config/site.ts (or override via SITE_URL).
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Keep noindex legal pages out of the sitemap.
      filter: (page) => !/\/(terms|privacy)\/?$/.test(page),
    }),
  ],
});
