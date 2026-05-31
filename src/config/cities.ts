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

// East Bay (Alameda & Contra Costa counties) only.
export const CITIES: City[] = [
  { slug: 'oakland', name: 'Oakland', state: 'CA' },
  { slug: 'berkeley', name: 'Berkeley', state: 'CA' },
  { slug: 'fremont', name: 'Fremont', state: 'CA' },
  { slug: 'hayward', name: 'Hayward', state: 'CA' },
  { slug: 'richmond', name: 'Richmond', state: 'CA' },
  { slug: 'concord', name: 'Concord', state: 'CA' },
  { slug: 'walnut-creek', name: 'Walnut Creek', state: 'CA' },
  { slug: 'alameda', name: 'Alameda', state: 'CA' },
  { slug: 'san-leandro', name: 'San Leandro', state: 'CA' },
  { slug: 'pleasanton', name: 'Pleasanton', state: 'CA' },
  { slug: 'dublin', name: 'Dublin', state: 'CA' },
  { slug: 'livermore', name: 'Livermore', state: 'CA' },
  { slug: 'castro-valley', name: 'Castro Valley', state: 'CA' },
  { slug: 'union-city', name: 'Union City', state: 'CA' },
];

export const getCity = (slug: string): City | undefined =>
  CITIES.find((c) => c.slug === slug);
