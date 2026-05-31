# Local Lead-Gen Template (Astro)

A static, **SEO-first local lead-generation** site built with [Astro](https://astro.build).
Pages for every **service × city** are generated from config, so one business can rank for
many "[service] in [city]" searches. Outputs static files to `dist/` — deploys to
**Cloudflare Pages** (or any static host). No backend required.

## Stack & approach

- **Astro** static output (`dist/`) — fast, SEO-friendly, zero client JS except a tiny form/nav script.
- **Programmatic pages** from `src/config/` (services + cities):
  - `/` — home
  - `/[service]/` — service hub (e.g. `/spring-repair/`)
  - `/[service]/[city]/` — service in a city (e.g. `/spring-repair/oakland/`) ← the SEO money pages
  - `/service-area/[city]/` — city hub (e.g. `/service-area/oakland/`)
  - `/terms`, `/privacy`
- **SEO**: per-page `<title>`/description/canonical, `LocalBusiness` + `Service` + `BreadcrumbList`
  JSON-LD, auto `sitemap-index.xml`, and `robots.txt`.
- **Twilio**: treated as **external** call-tracking/forwarding infrastructure. The site just
  displays the (tracked) phone number via click-to-call. No backend/webhooks here — configure
  forwarding in the Twilio console. (Add lead logging / dynamic routing later only if needed.)
- **Lead form**: posts to an **external form service** (Formspree / Web3Forms) — no server.

## Configure

Everything lives in `src/config/`:

- `site.ts` — company, phone, region, production `url`, and the **form endpoint**.
- `services.ts` — the services offered (each adds a hub page + one page per city).
- `cities.ts` — the service-area cities (each adds a hub page + one page per service).

**Page count = services × cities + hubs.** With 4 services and 14 cities that's
4×14 + 4 + 14 + 3 ≈ **77 pages**, all from config.

### Lead form

Set `formEndpoint` in `src/config/site.ts`:

- **Formspree**: create a form, set `formEndpoint` to `https://formspree.io/f/xxxxxx`.
- **Web3Forms**: set `formEndpoint` to `https://api.web3forms.com/submit` and `formAccessKey`
  to your access key.

If `formEndpoint` is empty, the form renders but submission shows "please call us" — so
click-to-call still works. The form includes a honeypot field for basic spam protection.

### Site URL

Set the production domain in two places (kept in sync intentionally):
`SITE.url` in `src/config/site.ts` and `site` in `astro.config.mjs` (or `SITE_URL` env var).
This drives canonical URLs, the sitemap, and `robots.txt`.

## Develop & build

Requires Node 18+ (`nvm use 22`).

```bash
npm install
npm run dev       # local dev server
npm run build     # static output → dist/
npm run preview   # preview the built site
```

## Deploy to Cloudflare Pages

1. Push the repo to GitHub/GitLab.
2. Cloudflare Pages → Create project → connect the repo.
3. Build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment variable**: `SITE_URL=https://yourdomain.com`
4. Add your custom domain in Pages.

That's it — no server, no functions. Twilio call forwarding is configured separately in the
Twilio console (point your tracked number at the destination/contractor).

## Project layout

```
astro.config.mjs        site URL + sitemap
src/
  config/               site.ts, services.ts, cities.ts  ← edit these
  layouts/BaseLayout.astro   SEO head + JSON-LD + header/footer
  components/           Header, Footer, QuoteForm, ServiceCards, CityLinks, Reviews, FinalCta
  lib/                  urls.ts (route helpers), schema.ts (JSON-LD)
  pages/                index, [service]/index, [service]/[city], service-area/[city], terms, privacy, robots.txt.ts
  styles/global.css
```
