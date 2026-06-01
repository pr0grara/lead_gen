# Images

These images are imported and optimized at build time by Astro's `astro:assets`
(responsive, WebP, hashed, lazy). They are **not** served from a third party.

## Structure

```
hero/
  default-hero.webp   Site-wide hero background (home, service hubs, default city hero)
  hero-modern.webp    Alternate hero (assigned to some priority cities in cities.ts)
  hero-family.webp    Alternate hero
services/
  garage-door-repair.webp   one per service slug (see src/config/services.ts)
  spring-repair.jpg
  opener-repair.webp
  cable-repair.webp
  off-track-repair.webp
  new-door-installation.webp
  emergency-repair.jpg
```

## real_photos/

Real job photos live in `src/assets/real_photos/`. Several service images already point
here (see `src/config/services.ts`): `garage-door-repair` → `baddoor_1.jpeg`,
`spring-repair` → `spring_2.jpeg`, `off-track-repair` → `outoftrack_5.jpeg`,
`emergency-repair` → `carhit_1.jpeg`. Drop more in and repoint imports the same way.

## Per-city service-photo override

To show a real local photo for one service in one city (e.g. a real Oakland spring job),
import it in `src/config/cities.ts` and set `serviceImages` on that city:

```ts
import oaklandSpring from '../assets/real_photos/spring_oakland.jpeg';
// ...in the Oakland entry:
serviceImages: { 'spring-repair': oaklandSpring },
```

The combo page (`/spring-repair/oakland/`) will use it; everywhere else falls back to the
service's default image.

## Swapping in real photos (recommended)

Real photos of your trucks, team, and completed jobs convert far better than stock and
help SEO (original imagery). To swap:

1. **A service photo:** drop your image into `src/assets/services/` and update that
   service's `import` in `src/config/services.ts` to point at the new file (any of
   `.jpg/.jpeg/.png/.webp/.avif`). Rebuild.
2. **The hero:** replace `hero/default-hero.webp` (or update the import in
   `src/lib/images.ts`).
3. **A per-city hero:** add an image to `src/assets/hero/`, `import` it in
   `src/config/cities.ts`, and set `heroImage` on that city.

Recommended source sizes: services ≥ 1200×900, hero ≥ 1600×900. Astro downscales/optimizes.

## Current stock & licensing

Placeholder images are sourced from rawpixel, StockSnap, and Wikimedia Commons under
**CC0 / Public Domain Mark** (free for commercial use, **no attribution required**),
selected via the Openverse API. They are intentionally generic home-exterior / garage-door
shots — replace with real job photos when available.
