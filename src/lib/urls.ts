import type { Service } from '../config/services';
import type { City } from '../config/cities';

const slug = (v: { slug: string } | string) => (typeof v === 'string' ? v : v.slug);

/** Service hub, e.g. /spring-repair/ */
export const serviceUrl = (s: Service | string) => `/${slug(s)}/`;

/** Service in a city, e.g. /spring-repair/oakland/ */
export const cityServiceUrl = (s: Service | string, c: City | string) =>
  `/${slug(s)}/${slug(c)}/`;

/** City hub, e.g. /service-area/oakland/ */
export const cityUrl = (c: City | string) => `/service-area/${slug(c)}/`;
