// ---------------------------------------------------------------------------
// Service-area cities. Each generates a city hub page (/service-area/[slug]/)
// and combines with every service (/[service]/[slug]/). Add/remove cities here.
// ---------------------------------------------------------------------------
export interface City {
  slug: string;
  name: string;
  /** Optional state/region abbreviation for titles, e.g. "CA" */
  state?: string;
}

export const CITIES: City[] = [
  { slug: 'san-francisco', name: 'San Francisco', state: 'CA' },
  { slug: 'oakland', name: 'Oakland', state: 'CA' },
  { slug: 'san-jose', name: 'San Jose', state: 'CA' },
  { slug: 'berkeley', name: 'Berkeley', state: 'CA' },
  { slug: 'fremont', name: 'Fremont', state: 'CA' },
  { slug: 'hayward', name: 'Hayward', state: 'CA' },
  { slug: 'sunnyvale', name: 'Sunnyvale', state: 'CA' },
  { slug: 'santa-clara', name: 'Santa Clara', state: 'CA' },
  { slug: 'palo-alto', name: 'Palo Alto', state: 'CA' },
  { slug: 'mountain-view', name: 'Mountain View', state: 'CA' },
  { slug: 'san-mateo', name: 'San Mateo', state: 'CA' },
  { slug: 'daly-city', name: 'Daly City', state: 'CA' },
  { slug: 'richmond', name: 'Richmond', state: 'CA' },
  { slug: 'concord', name: 'Concord', state: 'CA' },
];

export const getCity = (slug: string): City | undefined =>
  CITIES.find((c) => c.slug === slug);
