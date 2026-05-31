// ---------------------------------------------------------------------------
// Site-wide business config. Edit these to rebrand the template.
// ---------------------------------------------------------------------------
export interface SiteConfig {
  company: string;
  tagline: string;
  /** What the business does, lowercase, for prose: "garage door repair" */
  trade: string;
  phone: string; // dialable, E.164
  phoneDisplay: string; // shown to visitors
  email: string;
  /** Service-area region name shown in headlines, e.g. "Bay Area" */
  region: string;
  /** Production URL — keep in sync with `site` in astro.config.mjs (or set SITE_URL). */
  url: string;
  /**
   * External form handler (e.g. Formspree "https://formspree.io/f/xxxx" or
   * Web3Forms "https://api.web3forms.com/submit"). Leave "" to render the form
   * in call-only mode (submit is disabled with a notice). No backend required.
   */
  formEndpoint: string;
  /** Web3Forms access key, if using Web3Forms (otherwise leave ""). */
  formAccessKey: string;
  /**
   * Embedded map iframe `src` for the service-area section. Leave "" to use a
   * keyless OpenStreetMap embed of the region (see ServiceAreaMap.astro). To use
   * Google Maps, paste the src from Google Maps → Share → "Embed a map".
   */
  mapEmbedSrc: string;
  priceRange: string;
  ratingValue: string;
  reviewCount: string;
}

export const SITE: SiteConfig = {
  company: 'Garage Door Repairs',
  tagline: 'Garage Door Repair & Installation',
  trade: 'garage door repair',
  phone: '+15106942210',
  phoneDisplay: '(510) 694-2210',
  email: 'hello@example.com',
  region: 'East Bay',
  url: 'https://example.com',
  formEndpoint: '',
  formAccessKey: '',
  mapEmbedSrc: '',
  priceRange: '$$',
  ratingValue: '4.9',
  reviewCount: '127',
};

export const tel = (phone: string = SITE.phone): string => `tel:${phone}`;
