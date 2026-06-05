import type { Faq } from './services';
import type { ImageMetadata } from 'astro';
import heroModern from '../assets/hero/hero-modern.webp';
import heroFamily from '../assets/hero/hero-family.webp';

// ---------------------------------------------------------------------------
// East Bay service-area cities. Each entry carries genuinely localized content
// (intro, neighborhoods, common issues, FAQs) so city pages read as written for
// that specific city — not a name-swapped template. `nearby` references other
// city slugs in this list for internal linking. Array order = display order.
// ---------------------------------------------------------------------------
export interface CityIssue {
  title: string;
  body: string;
}

export interface City {
  slug: string;
  name: string;
  state?: string;
  /** Localized intro, ~150–250 words for priority cities. */
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  issues: CityIssue[];
  /** 3 nearby city slugs (must exist in this list). */
  nearby: string[];
  faqs: Faq[];
  /** Optional per-city hero background; falls back to the site default. */
  heroImage?: ImageMetadata;
  /**
   * Optional per-city service-photo overrides, keyed by service slug. Drop a real
   * local job photo here to override the generic service image on that combo page,
   * e.g. `serviceImages: { 'spring-repair': oaklandSpringPhoto }`. Import the photo
   * at the top of this file (from ../assets/real_photos/…) and reference it here.
   * Falls back to the service's default image when unset.
   */
  serviceImages?: Partial<Record<string, ImageMetadata>>;
}

export const CITIES: City[] = [
  // ----- Berkeley -----
  {
    slug: 'berkeley',
    name: 'Berkeley',
    state: 'CA',
    intro:
      "Berkeley's mix of century-old Craftsman bungalows, brown-shingle homes, and hillside houses creates garage door challenges you won't find in newer suburbs. In the flats of North Berkeley, Westbrae, and the Gourmet Ghetto, many homes have original detached wood garages with aging hardware and springs that have long outlived their cycle life. Up in the Berkeley Hills, steep, narrow driveways and damp, tree-shaded lots accelerate cable rust and roller wear, and tuck-under garages put extra strain on openers. Near campus and Southside, rental and multi-unit properties need reliable, low-maintenance doors that hold up to heavy daily use. We repair and replace springs, cables, openers, and full doors across every Berkeley neighborhood — from Elmwood and Claremont down to the Marina — and we know the access quirks of the hill streets. Same-day service is available throughout Berkeley, with upfront pricing and licensed, insured technicians. Whether it's a snapped spring on a 1920s bungalow or a modern opener upgrade with battery backup, we'll match the fix to your home and have your door running smoothly again.",
    neighborhoods: ['Berkeley Hills', 'North Berkeley', 'Elmwood', 'Southside', 'Westbrae', 'Claremont', 'West Berkeley', 'Thousand Oaks'],
    landmarks: ['UC Berkeley', 'Tilden Regional Park', 'Fourth Street', 'Telegraph Avenue', 'Berkeley Marina'],
    issues: [
      { title: 'Springs failing on older homes', body: 'Many Berkeley homes are 80–100+ years old with original or long-overdue torsion springs that snap without warning. Spring replacement is our most common Berkeley call.' },
      { title: 'Rust and roller wear in the hills', body: 'Damp, shaded lots in the Berkeley Hills accelerate cable corrosion and roller wear, while steep driveways put extra load on openers.' },
      { title: 'Aging detached wood garages', body: 'Classic detached garages around North Berkeley and Elmwood often need track realignment, new rollers, or a full door replacement.' },
    ],
    nearby: ['oakland', 'richmond', 'alameda'],
    heroImage: heroModern,
    faqs: [
      { q: 'Do you offer same-day garage door repair in Berkeley?', a: 'Yes — we provide same-day service across Berkeley for the most common issues like broken springs, cables, and opener failures, subject to availability.' },
      { q: 'Can you service homes in the Berkeley Hills?', a: 'Absolutely. We regularly work the narrow, steep streets of the Berkeley Hills and come prepared for tuck-under garages and tight driveways.' },
      { q: 'My Berkeley home has an old wood garage door — can you repair it?', a: "In most cases yes. We repair hardware, springs, and tracks on vintage doors, and we'll give you an honest repair-versus-replace recommendation if the door is failing." },
      { q: 'How much does garage door spring repair cost in Berkeley?', a: 'We quote an exact, upfront price before any work begins — no hourly surprises. Cost depends on the spring type and door size.' },
    ],
  },

  // ----- Oakland -----
  {
    slug: 'oakland',
    name: 'Oakland',
    state: 'CA',
    intro:
      "Oakland's housing runs the full range — from Rockridge and Temescal Craftsman homes to Montclair and Oakland Hills houses with steep, tuck-under garages, to the bungalows and Victorians of the Laurel, Fruitvale, and Glenview. That variety means no two garage door calls are quite alike. Hill homes around Montclair and the Oakland Hills deal with steep driveways, settling, and damp canyon air that wears cables and rollers; flatland neighborhoods like Fruitvale and the Laurel District have older doors and openers that have simply aged out. Around Grand Lake, Lake Merritt, and Piedmont Avenue, homeowners often want a reliable, secure, quieter door without losing the home's character. We handle it all — broken springs, frayed cables, dead openers, off-track doors, and full installations — with same-day service across Oakland and upfront, flat-rate pricing. Our technicians are licensed and insured and carry the common parts to finish most repairs on the first visit. From a snapped spring in Rockridge to a new insulated door in Montclair, we'll get your garage working and your home secure again.",
    neighborhoods: ['Rockridge', 'Temescal', 'Montclair', 'Fruitvale', 'Laurel District', 'Oakland Hills', 'Glenview', 'Grand Lake'],
    landmarks: ['Lake Merritt', 'Jack London Square', 'Piedmont Avenue', 'Mountain Boulevard', 'Redwood Regional Park'],
    issues: [
      { title: 'Tuck-under hill garages', body: 'Montclair and Oakland Hills homes often have steep driveways and tuck-under garages that strain openers and wear rollers faster.' },
      { title: 'Security after a door failure', body: 'A door stuck open is a security concern. We prioritize getting Oakland homes secured and the door operable quickly.' },
      { title: 'Aged openers in flatland bungalows', body: 'Many Fruitvale, Laurel, and Glenview homes run 15–20+ year-old openers without rolling-code security or battery backup — prime candidates for a quiet, modern upgrade.' },
    ],
    nearby: ['berkeley', 'alameda', 'richmond'],
    heroImage: heroFamily,
    faqs: [
      { q: 'Do you offer same-day garage door repair in Oakland?', a: 'Yes — same-day service is available across Oakland for common repairs, including broken springs, cables, and opener problems.' },
      { q: 'Can you reach homes in Montclair and the Oakland Hills?', a: 'Yes. We routinely service the hill neighborhoods and come equipped for steep driveways and tuck-under garages.' },
      { q: 'My garage door is stuck open in Oakland — can you secure it fast?', a: 'That\'s a priority call for us. We focus first on getting your home secure and the door operable, then complete the full repair.' },
      { q: 'Do you install new garage doors in Oakland?', a: 'Yes — we install insulated steel, glass-and-aluminum, carriage-house, and wood doors, with old-door removal and haul-away included.' },
    ],
  },

  // ----- Alameda -----
  {
    slug: 'alameda',
    name: 'Alameda',
    state: 'CA',
    intro:
      "Alameda is an island, and the salt air shows up in garage doors. Homes from the Gold Coast Victorians to the bungalows of the East End and West End to the newer builds on Bay Farm Island all contend with marine moisture that rusts springs, cables, and hardware faster than inland areas. Many of Alameda's older homes have narrow lots and detached garages along the alleys behind Park Street and Webster Street, where doors and tracks take a beating over the decades. We see a lot of corroded cables, rusty rollers, and tired springs here — and we replace them with rust-resistant parts built to last in a coastal environment. From the Marina Village condos to the historic homes near Crab Cove, we provide same-day garage door repair across Alameda with upfront pricing and licensed, insured technicians. Whether your spring snapped, your cable frayed from salt exposure, or you're ready for a new weather-tight insulated door, we'll get it handled and help your hardware stand up to island air.",
    neighborhoods: ['Bay Farm Island', 'East End', 'West End', 'Gold Coast', 'Park Street', 'Webster Street', 'Marina Village'],
    landmarks: ['Crab Cove', 'former Naval Air Station', 'Park Street District', 'Alameda Beach'],
    issues: [
      { title: 'Salt-air corrosion', body: 'Island marine air rusts springs, cables, and rollers faster than inland. We install rust-resistant parts and catch corrosion before it strands you.' },
      { title: 'Detached garages on narrow lots', body: 'Many older Alameda homes have detached alley garages with aging tracks and doors that need realignment or replacement.' },
      { title: 'Weather sealing', body: 'Damp coastal conditions make a well-sealed, insulated door worth it — we replace worn weather seals and bottom gaskets.' },
    ],
    nearby: ['oakland', 'berkeley', 'richmond'],
    heroImage: heroModern,
    faqs: [
      { q: 'Does the salt air in Alameda really affect my garage door?', a: 'Yes — coastal moisture corrodes springs, cables, and rollers faster. We recommend rust-resistant hardware and periodic inspections for island homes.' },
      { q: 'Do you offer same-day garage door repair in Alameda?', a: 'Yes, same-day service is available across Alameda, including Bay Farm Island, for common repairs.' },
      { q: 'Can you replace a rusted garage door cable in Alameda?', a: 'Definitely — corroded cables are one of our most common Alameda repairs. We replace them in pairs and rebalance the door.' },
      { q: 'Do you service Bay Farm Island?', a: 'Yes, Bay Farm Island is fully within our Alameda service area.' },
    ],
  },

  // ----- Orinda (Lamorinda) -----
  {
    slug: 'orinda',
    name: 'Orinda',
    state: 'CA',
    intro:
      "Orinda sits just over the Caldecott Tunnel in the wooded hills of Lamorinda, where winding roads, steep lots, and large custom and mid-century homes define the garage door work we do. Neighborhoods like Sleepy Hollow, Glorietta, Orinda Downs, and the Country Club area have long, steep driveways and detached or side-entry garages, and the mature tree canopy keeps many lots damp and shaded — which accelerates cable rust and roller wear. Summers inland from the tunnel run hot, stressing opener motors and electronics, and many Orinda homes have heavier wood or custom doors that need correctly sized, high-cycle springs. Because much of Orinda sits in a high fire-risk zone, a door and opener that reliably open — with battery backup during a power shut-off — genuinely matter. We provide same-day garage door repair across Orinda: springs, cables, rollers, openers, off-track doors, and new custom-door installations, with upfront, flat-rate pricing and licensed, insured technicians who know the hill streets. Whether it's a snapped spring in Glorietta or a quiet new opener in Sleepy Hollow, we'll get your door running smoothly and safely again.",
    neighborhoods: ['Orinda Village', 'Glorietta', 'Sleepy Hollow', 'Orinda Downs', 'Country Club', 'Ivy Drive'],
    landmarks: ['Orinda Theatre', 'Lake Cascade', 'San Pablo Reservoir', 'Wagner Ranch', 'Orinda BART'],
    issues: [
      { title: 'Long, steep hillside driveways', body: 'Sleepy Hollow and Glorietta homes have long, steep driveways and side-entry garages that put extra load on openers and wear rollers faster.' },
      { title: 'Rust in shaded, wooded lots', body: "Orinda's damp tree canopy keeps lots shaded and moist, accelerating cable and roller corrosion on many homes." },
      { title: 'Heavy wood & custom doors', body: 'Larger custom homes need correctly sized high-cycle springs and reliable openers — with battery backup that matters in a fire-risk area.' },
    ],
    nearby: ['lafayette', 'moraga', 'walnut-creek'],
    heroImage: heroFamily,
    faqs: [
      { q: 'Do you offer same-day garage door repair in Orinda?', a: 'Yes — same-day service is available across Orinda for common repairs like springs, cables, and openers, subject to availability.' },
      { q: 'Can you service the hill neighborhoods like Sleepy Hollow and Glorietta?', a: 'Yes. We know the winding Orinda hill streets and come equipped for long, steep driveways and side-entry garages.' },
      { q: 'My Orinda home has a heavy wood or custom door — can you repair it?', a: 'Yes — we size high-cycle springs for heavier custom and wood doors and service or replace the matching hardware.' },
      { q: 'Can you install an opener with battery backup for power shut-offs?', a: 'Definitely — we install quiet belt-drive openers with battery backup (required on new installs in California) so your door still opens during an outage.' },
    ],
  },

  // ----- Lafayette (Lamorinda) -----
  {
    slug: 'lafayette',
    name: 'Lafayette',
    state: 'CA',
    intro:
      "Lafayette is the heart of Lamorinda — a leafy, hilly community of established ranch homes and newer custom builds spread across Happy Valley, Burton Valley, Reliez Valley, and the streets around downtown and the Lafayette Reservoir. Many homes here sit on sloped, wooded lots with long driveways and side- or rear-entry garages, so worn rollers, frayed cables, and openers laboring against gravity are common calls. The hot inland summers behind the hills are tough on opener electronics, and Lafayette's older ranch homes frequently still run original springs and single-layer doors that are well past their prime and ready for a quieter, insulated upgrade. We provide same-day garage door repair throughout Lafayette — spring and cable replacement, opener repair and installation, off-track and roller fixes, and new custom doors — with upfront, flat-rate pricing and licensed, insured technicians who are comfortable on the hill streets. From a broken spring in Happy Valley to a new insulated door in Burton Valley, we carry the parts to finish most repairs on the first visit and get your door running smooth and quiet again.",
    neighborhoods: ['Downtown Lafayette', 'Happy Valley', 'Burton Valley', 'Reliez Valley', 'Upper Happy Valley', 'Trail Neighborhood'],
    landmarks: ['Lafayette Reservoir', 'Lafayette BART', 'Lafayette-Moraga Trail', 'Mount Diablo views'],
    issues: [
      { title: 'Sloped, wooded lots', body: 'Long driveways and side-entry garages on Lafayette hill lots add load on openers and wear rollers faster.' },
      { title: 'Heat-stressed openers', body: 'Hot summers behind the hills stress opener motors and logic boards, especially on west-facing garages.' },
      { title: 'Aging ranch-home doors', body: 'Older ranch homes often still run original springs and thin single-layer doors that are due for an insulated upgrade.' },
    ],
    nearby: ['orinda', 'moraga', 'walnut-creek'],
    heroImage: heroModern,
    faqs: [
      { q: 'Do you offer same-day garage door repair in Lafayette?', a: 'Yes — same-day service is available throughout Lafayette for common repairs like springs, cables, and openers.' },
      { q: 'Can you service hill homes in Happy Valley and Burton Valley?', a: 'Yes. We regularly work Lafayette\'s sloped, wooded lots and come prepared for long, steep driveways.' },
      { q: 'My old ranch home still has its original door — repair or replace?', a: "We'll give you an honest assessment. Often the springs and hardware can be repaired; a thin original door is often worth replacing with a quieter, insulated one." },
      { q: 'Can you install a quieter opener in Lafayette?', a: 'Definitely — we install quiet belt-drive Wi-Fi openers with battery backup to replace older, noisier units.' },
    ],
  },

  // ----- Moraga (Lamorinda) -----
  {
    slug: 'moraga',
    name: 'Moraga',
    state: 'CA',
    intro:
      "Moraga rounds out Lamorinda — a quiet, family-oriented town tucked into the hills around Saint Mary's College, with neighborhoods like Rheem Valley, Sanders Ranch, Campolindo, and the Moraga Country Club. Most homes are mid-century and newer single-family houses on sloped, wooded lots, so the garage door issues here track the rest of the hills: long driveways and side-entry garages that work openers harder, damp tree-shaded lots that rust cables and rollers, and hot inland summers that wear opener electronics. Many of Moraga's original homes are now decades old and running tired springs and aging openers that are ready for replacement. We provide same-day garage door repair across Moraga — spring and cable replacement, opener repair and installation, off-track and roller repair, and new insulated and custom doors — with upfront, flat-rate pricing and licensed, insured technicians who know the area's hill roads. Whether it's a snapped spring in Rheem Valley or a quiet new opener in Campolindo, we'll get your door balanced, quiet, and working again — usually the same day you call.",
    neighborhoods: ['Rheem Valley', 'Sanders Ranch', 'Campolindo', 'Moraga Country Club', 'Moraga Center', 'Bollinger Canyon'],
    landmarks: ["Saint Mary's College", 'Moraga Commons Park', 'Rheem Theatre', 'Lafayette-Moraga Trail'],
    issues: [
      { title: 'Hillside driveways', body: 'Sloped lots and side-entry garages across Moraga put extra load on openers and rollers over time.' },
      { title: 'Rust in shaded lots', body: 'Damp, wooded Moraga lots accelerate cable and roller corrosion, especially on north-facing and tree-shaded homes.' },
      { title: 'Aging original hardware', body: 'Decades-old springs and openers on Moraga\'s original homes are common failure points ready for replacement.' },
    ],
    nearby: ['orinda', 'lafayette', 'walnut-creek'],
    heroImage: heroFamily,
    faqs: [
      { q: 'Do you offer same-day garage door repair in Moraga?', a: 'Yes — same-day service is available across Moraga for common repairs like springs, cables, and openers, subject to availability.' },
      { q: 'Can you service the hill neighborhoods like Sanders Ranch and Campolindo?', a: 'Yes. We know Moraga\'s hill roads and come equipped for sloped lots and side-entry garages.' },
      { q: 'My springs and opener are decades old — can you replace them?', a: 'Definitely — we replace springs in matched pairs and install quiet belt-drive openers with battery backup.' },
      { q: 'Do you install new insulated or custom doors in Moraga?', a: 'Yes — we help you choose the right style and R-value, install it, and haul away the old door.' },
    ],
  },

  // ----- Walnut Creek -----
  {
    slug: 'walnut-creek',
    name: 'Walnut Creek',
    state: 'CA',
    intro:
      "Walnut Creek sits in the warm inland valley at the foot of Mount Diablo, and the hot summers here are hard on garage door openers and hardware. From the larger suburban homes of Northgate and Walnut Heights to the established streets of Parkmead and Saranap to the 55-plus community of Rossmoor, most Walnut Creek garages see double doors and heavily used openers that bake in the afternoon heat. We see a lot of worn springs on big two-car doors, opener logic boards and motors stressed by summer temperatures, and homeowners in Rossmoor who want a quiet, dependable door with battery backup so a power outage never traps the car. Around Downtown Walnut Creek and Broadway Plaza, we also handle newer townhomes and condos. We provide same-day garage door repair throughout Walnut Creek with upfront pricing and licensed technicians, and we carry the springs, rollers, and opener parts to finish most jobs in one visit — whether it's a heat-killed opener in Northgate or a new insulated door to keep the summer heat out of an attached garage.",
    neighborhoods: ['Rossmoor', 'Downtown Walnut Creek', 'Northgate', 'Saranap', 'Walnut Heights', 'Parkmead'],
    landmarks: ['Mount Diablo', 'Broadway Plaza', 'Iron Horse Trail', 'Rossmoor'],
    issues: [
      { title: 'Heat-stressed openers', body: "Walnut Creek's hot summers are tough on opener motors and logic boards. Heat-related opener failures spike here from June through September." },
      { title: 'Worn springs on large double doors', body: 'Bigger suburban homes mean heavier two-car doors that wear springs faster — a common Northgate and Walnut Heights repair.' },
      { title: 'Quiet, reliable doors for Rossmoor', body: 'Rossmoor residents value quiet belt-drive openers with battery backup so an outage never leaves a car stuck.' },
    ],
    nearby: ['lafayette', 'concord', 'pleasanton'],
    heroImage: heroFamily,
    faqs: [
      { q: 'Do you offer same-day garage door repair in Walnut Creek?', a: 'Yes — same-day service is available throughout Walnut Creek, including Rossmoor and Northgate, for common repairs.' },
      { q: 'Can the summer heat damage my garage door opener?', a: 'It can. Sustained inland heat stresses opener motors and electronics; we repair and replace heat-damaged openers and recommend units that handle it better.' },
      { q: 'Do you service the Rossmoor community?', a: 'Yes, we regularly serve Rossmoor and can install quiet openers with battery backup that meet community needs.' },
      { q: 'Should I get an insulated door for my attached garage?', a: 'In Walnut Creek\'s heat, an insulated door noticeably reduces how hot an attached garage and the rooms above it get. We can walk you through options.' },
    ],
  },

  // ----- Concord -----
  {
    slug: 'concord',
    name: 'Concord',
    state: 'CA',
    intro:
      "Concord is built largely of mid-century tract homes — many from the 1950s through the 1970s in neighborhoods like Dana Estates, Clayton Valley, and the streets around Ygnacio Valley Road — and those original-era garage doors and springs are now well past their service life. Add Concord's hot inland summers, and you get a steady mix of snapped springs, tired openers, and heavy single-layer steel doors ready for an upgrade. Homes up toward the Concord hills and Clayton border deal with some settling and longer driveways, while the area around Todos Santos Plaza has a mix of older homes and newer infill. We replace springs and cables, repair and upgrade openers, get off-track doors running again, and install new insulated doors that hold up better to the valley heat. Same-day garage door repair is available across Concord with upfront, flat-rate pricing and licensed, insured technicians. Whether your 1960s door finally gave out or your opener quit in a July heat wave, we carry the parts to fix most issues on the first visit.",
    neighborhoods: ['Clayton Valley', 'Dana Estates', 'Ygnacio Valley', 'Concord Hills', 'Todos Santos', 'Monument Corridor'],
    landmarks: ['Todos Santos Plaza', 'Mount Diablo', 'Concord Pavilion', 'Newhall Community Park'],
    issues: [
      { title: 'Original springs on mid-century homes', body: "Concord's many 1950s–70s tract homes often still run original or long-overdue springs that fail suddenly." },
      { title: 'Heat-related opener failures', body: 'Hot summers in the valley wear out opener motors and boards; we see a seasonal jump in opener calls.' },
      { title: 'Aging single-layer steel doors', body: 'Many original doors are thin, non-insulated, and dented — good candidates for a quieter, insulated replacement.' },
    ],
    nearby: ['walnut-creek', 'pleasanton', 'dublin'],
    heroImage: heroModern,
    faqs: [
      { q: 'Do you offer same-day garage door repair in Concord?', a: 'Yes — same-day service is available across Concord for common repairs like springs, cables, and opener issues.' },
      { q: 'My 1960s Concord home still has its original garage door — repair or replace?', a: "We'll give you an honest assessment. Often the springs and hardware can be repaired, but a thin original door may be worth replacing with an insulated one." },
      { q: 'Why did my opener stop working in the summer?', a: "Sustained heat is hard on opener motors and electronics. We diagnose whether it's a repair or a replacement and quote it upfront." },
      { q: 'Do you carry parts to fix my door the same day?', a: 'Our trucks carry the common springs, cables, rollers, and opener parts to finish most Concord repairs on the first visit.' },
    ],
  },

  // ----- Pleasanton -----
  {
    slug: 'pleasanton',
    name: 'Pleasanton',
    state: 'CA',
    intro:
      "Pleasanton is Tri-Valley suburbia at its best — larger, newer custom and semi-custom homes in Ruby Hill, Kottinger Ranch, Vintage Hills, and Val Vista, many with three-car garages and premium doors. That means we do a lot of work on heavier doors, multiple openers per home, and homeowners who want their garage to look and run as well as the rest of the house. Pleasanton's hot inland summers also stress opener electronics, and the newer high-cycle doors here eventually wear through springs from frequent daily use. Around Downtown Pleasanton and Birdland, there's a mix of established and newer homes. We provide same-day garage door repair across Pleasanton with upfront, flat-rate pricing and licensed, insured technicians — from spring and cable replacement to quiet opener upgrades to brand-new insulated and glass-accented doors that match upscale homes. Whether a spring snapped on a three-car door in Ruby Hill or an opener quit in the summer heat, we carry the parts to finish most repairs on the first visit.",
    neighborhoods: ['Ruby Hill', 'Kottinger Ranch', 'Vintage Hills', 'Val Vista', 'Birdland', 'Downtown Pleasanton'],
    landmarks: ['Alameda County Fairgrounds', 'Main Street', 'Callippe Preserve', 'Pleasanton Ridge'],
    issues: [
      { title: 'Three-car garages & multiple doors', body: 'Larger Pleasanton homes often have two or three doors and openers, so we frequently service or upgrade several at once.' },
      { title: 'Heat-stressed openers', body: 'Hot Tri-Valley summers wear opener motors and boards, especially on west-facing garages.' },
      { title: 'High-use springs on newer doors', body: 'Frequent daily cycling wears springs even on newer high-cycle doors over time.' },
    ],
    nearby: ['dublin', 'livermore', 'castro-valley'],
    faqs: [
      { q: 'Do you offer same-day garage door repair in Pleasanton?', a: 'Yes — same-day service is available across Pleasanton, including Ruby Hill and the newer developments.' },
      { q: 'I have a three-car garage — can you service all the doors?', a: 'Absolutely. We routinely service and upgrade multiple doors and openers on the same visit.' },
      { q: 'Can you match a new door to my upscale home?', a: 'Yes — we install premium insulated, carriage-house, and glass-accented doors to complement Pleasanton homes.' },
      { q: 'Does summer heat affect my opener?', a: "It does. Sustained heat stresses opener electronics; we'll diagnose and recommend a repair or a more heat-tolerant unit." },
    ],
  },

  // ----- Livermore -----
  {
    slug: 'livermore',
    name: 'Livermore',
    state: 'CA',
    intro:
      "Livermore is the East Bay's wine country, and its inland valley location makes it one of the hottest spots in the region — which matters more for garage doors than people expect. Sustained summer heat is hard on opener motors and electronics, and the dust and dry conditions out toward South Livermore's vineyards and Springtown can work into rollers and tracks. Homes here range from established neighborhoods near Downtown Livermore and Sunset to larger estates in the wine-country foothills, many with two- and three-car attached garages. We handle the full range: broken springs, worn cables and rollers, heat-failed openers, off-track doors, and new insulated door installs that help keep the valley heat out of attached garages. Same-day garage door repair is available across Livermore with upfront pricing and licensed, insured technicians, and we stock our trucks to finish most jobs on the first visit. Whether your opener quit during a heat wave or a spring snapped on a big double door near the Portola area, we'll get your garage running cool and smooth again.",
    neighborhoods: ['Downtown Livermore', 'Springtown', 'Sunset', 'South Livermore', 'Portola', 'Vineyard Avenue'],
    landmarks: ['Livermore wine country', 'Downtown Livermore', 'Del Valle Regional Park', 'Lawrence Livermore Lab'],
    issues: [
      { title: 'Extreme summer heat on openers', body: "Livermore is among the hottest spots in the East Bay; heat-related opener failures are common in summer." },
      { title: 'Dust in tracks and rollers', body: 'Dry, dusty conditions toward the vineyards work into tracks and rollers, increasing wear and noise.' },
      { title: 'Large estate doors', body: 'Wine-country estates often have oversized or multiple doors that need heavier-duty springs and hardware.' },
    ],
    nearby: ['pleasanton', 'dublin', 'castro-valley'],
    faqs: [
      { q: 'Do you offer same-day garage door repair in Livermore?', a: 'Yes — same-day service is available throughout Livermore for common repairs, subject to availability.' },
      { q: 'Why does my opener keep failing in the summer?', a: "Livermore's extreme heat stresses opener motors and electronics. We diagnose whether it's a repair or a replacement and quote it upfront." },
      { q: 'Do you service the wine-country estates in South Livermore?', a: 'Yes — including larger and oversized doors that need heavier-duty springs and hardware.' },
      { q: 'Can an insulated door help with the heat?', a: 'Yes, an insulated door reduces how hot an attached garage gets, which matters a lot in Livermore summers.' },
    ],
  },

  // ----- Dublin -----
  {
    slug: 'dublin',
    name: 'Dublin',
    state: 'CA',
    intro:
      "Dublin is one of the Tri-Valley's fastest-growing cities, and most of its housing is newer — master-planned neighborhoods like Dublin Ranch, Jordan Ranch, Positano, and Schaefer Ranch, plus the transit-oriented developments around Downtown Dublin and the West Dublin/Pleasanton BART station. Newer construction means newer doors, but it doesn't mean trouble-free: these homes cycle their two- and three-car doors heavily every day, so high-cycle spring wear, worn rollers, and openers due for an upgrade are our most common Dublin calls. The hot Tri-Valley summers near the 580/680 interchange also stress opener motors and circuit boards, and many homeowners want quieter belt-drive openers with Wi-Fi and battery backup. We provide same-day garage door repair throughout Dublin with upfront, flat-rate pricing and licensed, insured technicians who carry the springs, rollers, cables, and opener parts to finish most jobs in a single visit. From a snapped spring on a three-car garage in Dublin Ranch to a smart-opener upgrade near Emerald Glen, we'll get your door running smooth and quiet again.",
    neighborhoods: ['Dublin Ranch', 'Jordan Ranch', 'Positano', 'Schaefer Ranch', 'Downtown Dublin', 'West Dublin'],
    landmarks: ['Emerald Glen Park', 'Dublin/Pleasanton BART', 'Fallon Sports Park', 'Tassajara Hills'],
    issues: [
      { title: 'High-cycle spring wear', body: "Dublin's busy households cycle their doors constantly; even on newer homes, springs and rollers wear out and snap over time." },
      { title: 'Heat-stressed openers', body: 'Hot Tri-Valley summers near the 580/680 interchange are hard on opener motors and logic boards.' },
      { title: 'Three-car garages', body: 'Larger Dublin Ranch and Positano homes often have multiple doors and openers to service or upgrade at once.' },
    ],
    nearby: ['pleasanton', 'livermore', 'castro-valley'],
    faqs: [
      { q: 'Do you offer same-day garage door repair in Dublin?', a: 'Yes — same-day service is available across Dublin, including Dublin Ranch and the newer developments, for common repairs.' },
      { q: 'Can you service three-car garages in Dublin Ranch?', a: 'Yes — we routinely service and upgrade multiple doors and openers on the same visit.' },
      { q: 'Can you install a quiet smart opener in Dublin?', a: 'Definitely — we install quiet belt-drive Wi-Fi openers with battery backup, which California requires on new installs.' },
      { q: 'My home is newer — why is the spring already failing?', a: 'Heavy daily use cycles springs out regardless of age. We replace them in matched pairs and can fit longer-life high-cycle springs.' },
    ],
  },

  // ----- Richmond -----
  {
    slug: 'richmond',
    name: 'Richmond',
    state: 'CA',
    intro:
      "Richmond stretches from the bayfront at Point Richmond and Marina Bay across the flats of the Iron Triangle and Richmond Annex up into the eastern hills along the El Cerrito border, May Valley, and Richmond Heights — and that range shows up in its garage doors. Closest to the water, in Point Richmond and Marina Bay, salt-laden bay air corrodes springs, cables, and rollers faster than inland, so rust-related failures are common. The older homes of the Iron Triangle and central Richmond frequently have detached garages with original hardware, tired springs, and tracks knocked out of alignment over the decades. Newer Hilltop and Marina Bay homes mostly run standard attached two-car doors that need routine spring, opener, and roller service. We provide same-day garage door repair across all of Richmond — springs, cables, rollers, openers, off-track doors, and full installations — with upfront, flat-rate pricing and licensed, insured technicians. Our trucks carry rust-resistant parts suited to a bayfront city, and we finish most repairs on the first visit. Whether it's a corroded cable near the Marina or a snapped spring in the Annex, we'll get your door balanced and running again.",
    neighborhoods: ['Point Richmond', 'Marina Bay', 'Hilltop', 'Richmond Annex', 'Iron Triangle', 'Richmond Heights', 'May Valley', 'Park Plaza'],
    landmarks: ['Point Richmond Historic District', 'Richmond Marina', 'Rosie the Riveter WWII Home Front NHP', 'Miller/Knox Regional Shoreline'],
    issues: [
      { title: 'Bayside corrosion', body: 'Salt air near Point Richmond and Marina Bay corrodes cables, springs, and rollers faster than inland — we fit rust-resistant parts built for a bayfront city.' },
      { title: 'Aging detached garages', body: 'Iron Triangle and central Richmond homes often have detached garages with worn original hardware and tracks needing realignment.' },
      { title: 'Hillside settling', body: 'Homes in the eastern hills (May Valley, Richmond Heights) can shift over time, pulling doors and tracks out of alignment.' },
    ],
    nearby: ['berkeley', 'oakland', 'concord'],
    faqs: [
      { q: 'Do you offer same-day garage door repair in Richmond?', a: 'Yes — same-day service is available across Richmond, including Point Richmond, Marina Bay, and the Annex, for common repairs.' },
      { q: 'Does the bay air affect garage doors in Richmond?', a: 'It does. Waterfront moisture speeds up corrosion of cables, springs, and rollers, so we often recommend rust-resistant parts for homes near the water.' },
      { q: 'Can you repair an old detached-garage door in Point Richmond?', a: 'Yes — we repair springs, hardware, and tracks on vintage detached garages, and give an honest repair-versus-replace recommendation when a door is failing.' },
      { q: 'Can you replace a corroded cable near the Richmond Marina?', a: 'Definitely — corroded cables are one of our most common bayside repairs. We replace them in pairs and rebalance the door.' },
    ],
  },

  // ----- Castro Valley -----
  {
    slug: 'castro-valley',
    name: 'Castro Valley',
    state: 'CA',
    intro:
      "Castro Valley is a mostly unincorporated community that runs along Castro Valley Boulevard and climbs into the hills of Five Canyons, Palomares Hills, and Jensen Ranch. Most of its homes are mid-century single-family houses with attached two-car garages, and after decades the original springs, rollers, and openers have typically aged out — spring and opener failures are the calls we get most here. The hillside neighborhoods add their own wrinkle: longer, steeper driveways put extra load on openers, and some ground settling on the slopes can pull doors and tracks out of alignment over time. Down along the boulevard and near Lake Chabot, there's a mix of older homes and newer builds. We provide same-day garage door repair across Castro Valley — springs, cables, rollers, openers, off-track doors, and full new-door installations — with upfront, flat-rate pricing and licensed, insured technicians who carry the common parts to finish most jobs in one visit. From a snapped spring off the boulevard to an off-track door up in Five Canyons, we'll get yours rolling smoothly and safely again.",
    neighborhoods: ['Five Canyons', 'Palomares Hills', 'Jensen Ranch', 'Castro Valley Boulevard', 'Proctor', 'Lake Chabot area', 'Greenridge'],
    landmarks: ['Lake Chabot Regional Park', 'Castro Valley Boulevard', 'Cull Canyon Regional Recreation Area'],
    issues: [
      { title: 'Aging mid-century hardware', body: 'Original springs, rollers, and openers on older Castro Valley homes are common failure points well past their service life.' },
      { title: 'Hillside driveway wear', body: 'Five Canyons and Palomares Hills homes have longer, steeper driveways that add load on openers and wear rollers faster.' },
      { title: 'Settling & off-track doors', body: 'Ground movement on the slopes can pull tracks out of alignment over time, leaving doors off-track.' },
    ],
    nearby: ['dublin', 'oakland', 'livermore'],
    faqs: [
      { q: 'Do you offer same-day garage door repair in Castro Valley?', a: 'Yes — same-day service is available across Castro Valley, from the boulevard to the hill neighborhoods, for common repairs.' },
      { q: 'Do you service the Five Canyons and Palomares hills?', a: 'Yes, we regularly serve the hillside neighborhoods and come equipped for longer, steeper driveways.' },
      { q: 'My door went off-track up in the hills — can you fix it?', a: 'Yes — we realign the track, replace worn or damaged rollers, and re-check the balance so it runs safely again.' },
      { q: 'Can you upgrade an old opener in Castro Valley?', a: 'Definitely — we replace aging units with quiet belt-drive Wi-Fi openers that include battery backup.' },
    ],
  },

  // ----- Union City -----
  {
    slug: 'union-city',
    name: 'Union City',
    state: 'CA',
    intro:
      "Union City sits in the southern East Bay along the I-880 corridor, with its housing split between the established, historic Decoto and Alvarado districts and newer transit-oriented developments around the Union City BART station and Union Landing. The older Decoto and Old Alvarado neighborhoods have mid-century homes whose original springs, cables, and openers are well past their service life, while the newer areas have standard attached two-car garages that need routine spring, roller, and opener service. Heavy daily use on these double doors wears springs and rollers, and aging openers without rolling-code security or battery backup are common upgrade candidates. We provide same-day garage door repair throughout Union City with upfront, flat-rate pricing and licensed, insured technicians, and our trucks carry the springs, cables, rollers, and opener parts to finish the majority of repairs on the first visit. Whether it's a snapped spring in Decoto or a worn-out opener near Union Landing, we'll get your door balanced, quiet, and working again — usually the same day you call.",
    neighborhoods: ['Decoto', 'Alvarado', 'Old Alvarado', 'Union Landing', 'Cabello', 'Hillview'],
    landmarks: ['Union City BART', 'Dry Creek Pioneer Regional Park', 'Quarry Lakes', 'Union Landing'],
    issues: [
      { title: 'Worn springs & openers', body: 'Established Decoto and Alvarado homes commonly need spring and opener service after decades of use.' },
      { title: 'Heavy double doors', body: 'Attached two-car doors wear springs and rollers with daily use across both older and newer Union City neighborhoods.' },
      { title: 'Aging openers', body: 'Older openers without rolling-code security or battery backup are common candidates for a quiet, modern upgrade.' },
    ],
    nearby: ['castro-valley', 'oakland', 'dublin'],
    faqs: [
      { q: 'Do you offer same-day garage door repair in Union City?', a: 'Yes — same-day service is available across Union City for common repairs like springs, cables, and openers.' },
      { q: 'Do you service the Decoto and Alvarado areas?', a: 'Yes — those established neighborhoods are fully within our Union City service area.' },
      { q: 'Can you upgrade my old opener near Union Landing?', a: 'Definitely — we install quiet belt-drive Wi-Fi openers with battery backup to replace aging units.' },
      { q: 'My double garage door is loud — what\'s wrong?', a: 'Usually worn springs and rollers. We inspect, rebalance, and replace what\'s needed so it runs smoothly and quietly again.' },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

/** Resolve a list of nearby city slugs to City objects (skipping any unknowns). */
export const nearbyCities = (city: City): City[] =>
  city.nearby.map((s) => getCity(s)).filter((c): c is City => Boolean(c));
