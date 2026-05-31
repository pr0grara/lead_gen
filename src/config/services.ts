// ---------------------------------------------------------------------------
// Services offered. Each generates a service hub page (/[slug]/) and a page for
// every city (/[slug]/[city]/). Add/remove services here.
// ---------------------------------------------------------------------------
export interface Service {
  slug: string;
  /** Full service name, e.g. "Garage Door Spring Repair" */
  name: string;
  /** Short label for nav and cards */
  short: string;
  /** One-line summary */
  blurb: string;
  /** Longer paragraph used on service + city pages */
  description: string;
  /** Bullet points of what's included */
  points: string[];
  image: string;
  imageAlt: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'spring-repair',
    name: 'Garage Door Spring Repair',
    short: 'Spring Repair',
    blurb: 'Fast, safe replacement of broken torsion and extension springs — usually same day.',
    description:
      "A broken torsion or extension spring is the most common reason a garage door won't open. Springs are under high tension and dangerous to replace yourself. Our licensed technicians replace worn and snapped springs safely the same day, so you're never stuck in (or out of) your garage for long.",
    points: [
      'Torsion & extension spring replacement',
      'Matched-cycle springs for longer life',
      'Same-day service in most areas',
      'Upfront pricing before we start',
    ],
    image: 'https://loremflickr.com/800/600/garage,door?lock=21',
    imageAlt: 'Technician replacing a garage door torsion spring',
  },
  {
    slug: 'opener-repair',
    name: 'Garage Door Opener Repair & Installation',
    short: 'Opener Repair',
    blurb: 'Troubleshooting, repair, and installation of openers from every major brand.',
    description:
      'Remote not responding, motor humming, or opener completely dead? We diagnose and repair openers from all major brands — and install quiet, modern belt-drive openers with smartphone control and battery backup when it makes sense to replace.',
    points: [
      'Repair of all major opener brands',
      'New quiet belt-drive openers',
      'Smartphone & keypad setup',
      'Safety sensor alignment',
    ],
    image: 'https://loremflickr.com/800/600/garage,door?lock=22',
    imageAlt: 'Garage door opener motor being installed',
  },
  {
    slug: 'new-door-installation',
    name: 'New Garage Door Installation',
    short: 'New Doors',
    blurb: 'Upgrade your curb appeal and insulation with a professionally installed new door.',
    description:
      "Upgrade your home's curb appeal, security, and insulation with a new garage door. We help you choose the right style and R-value for your home, then handle professional installation and haul-away of the old door.",
    points: [
      'Insulated steel, wood & glass styles',
      'Professional measurement & install',
      'Old door removal & haul-away',
      'Manufacturer warranties',
    ],
    image: 'https://loremflickr.com/800/600/garage,door?lock=23',
    imageAlt: 'Newly installed residential garage door',
  },
  {
    slug: 'off-track-repair',
    name: 'Off-Track & Cable Repair',
    short: 'Off-Track & Cables',
    blurb: 'Realigning rollers and replacing snapped cables to get your door moving safely.',
    description:
      'A door off its track or a snapped lift cable is dangerous to force. We realign rollers, straighten or replace bent track, and replace frayed or broken cables so your door rolls smoothly and safely again.',
    points: [
      'Off-track door realignment',
      'Cable & roller replacement',
      'Bent track repair or replacement',
      'Full safety inspection',
    ],
    image: 'https://loremflickr.com/800/600/garage,door?lock=24',
    imageAlt: 'Garage door track and cable being repaired',
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);
