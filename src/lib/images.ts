import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import defaultHero from '../assets/hero/default-hero.webp';

export { defaultHero };

// Returns an optimized WebP URL for a hero background (CSS can't use <Image>).
// Pass a city's optional heroImage, or omit for the site-wide default.
export async function getHeroUrl(img?: ImageMetadata): Promise<string> {
  // Hero sits under a heavy navy overlay, so a smaller/lower-quality file is
  // indistinguishable but loads much faster (this is usually the LCP element).
  const optimized = await getImage({
    src: img ?? defaultHero,
    width: 1280,
    format: 'webp',
    quality: 58,
  });
  return optimized.src;
}
