# Service-area map

`service-area.png` is the basemap rendered by
[`src/components/ServiceAreaMap.astro`](../../components/ServiceAreaMap.astro).
It's a finished infographic (terrain, the orange coverage shape, baked-in title +
city labels). Astro re-optimizes it to WebP at build time, so a large PNG source
is fine.

To swap it:

1. Replace `service-area.png` with your new image (keep the filename, or update the
   `import` in `ServiceAreaMap.astro`). Any landscape-ish aspect works; the layout
   follows the image's intrinsic ratio.
2. If the city positions move, re-calibrate the clickable hotspots: the `PINS`
   array in `ServiceAreaMap.astro` holds each linked city's `left`/`top` as a
   percentage of the image. Nudge those values until the hover ring sits on each
   city dot.

A dark-mode variant is optional — if you add `service-area-dark.png` and wire up a
second `<Image>`, the component can swap it under `prefers-color-scheme: dark`.
