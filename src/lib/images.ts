import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import defaultHero from '../assets/hero/default-hero.webp';

export { defaultHero };

// Returns an optimized WebP URL for a hero background (CSS can't use <Image>).
// Pass a city's optional heroImage, or omit for the site-wide default.
export async function getHeroUrl(img?: ImageMetadata): Promise<string> {
  const optimized = await getImage({
    src: img ?? defaultHero,
    width: 1600,
    format: 'webp',
    quality: 70,
  });
  return optimized.src;
}
