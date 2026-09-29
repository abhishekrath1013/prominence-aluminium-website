// Verified technical specifications sourced directly from uniframe.com product pages
// (graf-26, graf-32, graf-45, graf-73, livio, robus-30, robus-40). Sep 2026 audit.
// No figure in this file may be edited without re-verifying against the live site.
import type { ImageMetadata } from "astro";
import { images } from "../assets/images";

export interface SpecRow {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  family: "sliding" | "casement";
  name: string; // e.g. "GRAF 45"
  fullTitle: string; // e.g. "Graf 45 Sliding Door & Windows"
  category: string; // short type label
  headline: string; // real descriptive line drawn from the source page
  description: string;
  heroImage: ImageMetadata;
  cardImage: ImageMetadata;
  frame: SpecRow[];
  glazing: SpecRow[];
  sash: SpecRow[];
  performance: SpecRow[];
  hardware: string;
  applications: string;
}

export const products: Product[] = [
  {
    slug: "graf-26",
    family: "sliding",
    name: "GRAF 26",
    fullTitle: "Graf 26 Sliding Door & Windows",
    category: "Sliding System",
    headline: "Minimal design meeting modern functionality.",
    description:
      "Slender aluminium profiles and clean lines for contemporary architectural styles — built for smooth operation, superior thermal insulation and weather protection in residential and commercial settings.",
    heroImage: images.lifestyleSlidingBrightGarden,
    cardImage: images.lifestyleSlidingBrightGarden,
    frame: [
      { label: "Frame face width", value: "44mm" },
      { label: "Frame depth", value: "48mm / 74mm / 84mm" },
      { label: "Sash face width", value: "53mm" },
      { label: "Sash depth", value: "26mm" },
      { label: "Interlock face width", value: "32mm" },
      { label: "Wall thickness", value: "Min. 1.2mm" },
    ],
    glazing: [{ label: "Glass thickness", value: "5–8mm" }],
    sash: [
      { label: "Windows — min / max", value: "600×500mm / 1500×800mm" },
      { label: "Windows — max sash weight", value: "30kg" },
      { label: "Doors — min / max", value: "600×500mm / 2100×1000mm" },
      { label: "Doors — max sash weight", value: "50kg" },
    ],
    performance: [
      { label: "Wind load resistance", value: "1500 Pa" },
      { label: "Air permeability", value: "300 Pa" },
      { label: "Water tightness", value: "200 Pa" },
    ],
    hardware: "Aluminium / stainless steel. Single locking (windows), multi-point locking (doors).",
    applications: "Residential and commercial openings requiring a slender, minimal sightline.",
  },
  {
    slug: "graf-32",
    family: "sliding",
    name: "GRAF 32",
    fullTitle: "Graf 32 Sliding Doors and Windows",
    category: "Sliding System",
    headline: "The art of strength and grace.",
    description:
      "A concealed heavy sliding system engineered for oversized glass and effortless operation, with thermal insulation, weather resistance and noise reduction built into every profile.",
    heroImage: images.villa2,
    cardImage: images.villa2,
    frame: [
      { label: "Frame face width", value: "80mm (concealed)" },
      { label: "Frame depth", value: "188mm (2T)" },
      { label: "Sash face width", value: "25mm (concealed)" },
      { label: "Sash depth", value: "73mm (concealed)" },
      { label: "Interlock face width", value: "16mm / 25mm" },
      { label: "Wall thickness", value: "Min. 2.5mm" },
    ],
    glazing: [
      { label: "Glass thickness", value: "24–40mm" },
      { label: "Finish options", value: "Marble & metallic finishes" },
    ],
    sash: [
      { label: "Max sash size", value: "3000 × 3000mm" },
      { label: "Max sash weight", value: "800kg" },
    ],
    performance: [
      { label: "Wind load resistance", value: "2000 Pa" },
      { label: "Air permeability", value: "450 Pa" },
      { label: "Water tightness", value: "450 Pa" },
    ],
    hardware: "Aluminium / stainless steel, multi-point locking systems.",
    applications: "Large-format openings where structure disappears behind the glass.",
  },
  {
    slug: "graf-45",
    family: "sliding",
    name: "GRAF 45",
    fullTitle: "Graf 45 Sliding Door & Windows",
    category: "Sliding System",
    headline: "The pinnacle of architectural ambition.",
    description:
      "Designed for expansive openings, Graf 45 pairs heavy-duty aluminium profiles with large glass panels and a precision sliding mechanism for effortless operation and a minimalist aesthetic.",
    heroImage: images.heroDuskLivingroom,
    cardImage: images.heroDuskLivingroom,
    frame: [
      { label: "Frame face width", value: "44mm" },
      { label: "Frame depth", value: "48mm / 74mm / 84mm" },
      { label: "Sash face width", value: "53mm" },
      { label: "Sash depth", value: "26mm" },
      { label: "Interlock face width", value: "32mm" },
      { label: "Wall thickness", value: "Min. 1.2mm" },
    ],
    glazing: [{ label: "Glass thickness", value: "5–8mm" }],
    sash: [
      { label: "Sash height — min / max", value: "600mm / 2100mm" },
      { label: "Sash width — min / max", value: "500mm / 1000mm" },
      { label: "Max sash weight", value: "50kg (non-concealed)" },
    ],
    performance: [
      { label: "Wind load resistance", value: "1500 Pa" },
      { label: "Air permeability", value: "300 Pa" },
      { label: "Water tightness", value: "200 Pa" },
    ],
    hardware: "Aluminium and stainless steel, multi-point locking systems.",
    applications: "Luxury homes, modern villas and high-end commercial spaces requiring expansive openings.",
  },
  {
    slug: "graf-73",
    family: "sliding",
    name: "GRAF 73",
    fullTitle: "Graf 73 Panoramic Sliding Series",
    category: "Panoramic Sliding",
    headline: "All-around concealed, built for the panoramic view.",
    description:
      "Our largest-format sliding series — concealed on every side and rated for oversized glass, so the frame recedes entirely and the landscape takes over.",
    heroImage: images.villa,
    cardImage: images.villa,
    frame: [
      { label: "Frame face width", value: "80mm (concealed)" },
      { label: "Frame depth", value: "188mm (2T)" },
      { label: "Sash face width", value: "25mm (concealed)" },
      { label: "Sash depth", value: "73mm (concealed)" },
      { label: "Interlock face width", value: "16mm / 25mm" },
      { label: "Wall thickness", value: "Min. 2.5mm" },
    ],
    glazing: [
      { label: "Glass thickness", value: "24–40mm" },
      { label: "Finish options", value: "Marble & metallic finishes" },
    ],
    sash: [
      { label: "Max sash size", value: "3000 × 3000mm" },
      { label: "Max sash weight", value: "800kg, all-around concealed" },
    ],
    performance: [
      { label: "Wind load resistance", value: "2000 Pa" },
      { label: "Air permeability", value: "450 Pa" },
      { label: "Water tightness", value: "450 Pa" },
    ],
    hardware: "Aluminium / stainless steel, multi-point locking systems.",
    applications: "Panoramic, floor-to-ceiling openings across villas and premium developments.",
  },
  {
    slug: "livio",
    family: "casement",
    name: "LIVIO",
    fullTitle: "Livio Aluminium Casement Door & Windows",
    category: "Casement System",
    headline: "Only the frame face is visible externally.",
    description:
      "A concealed-frame casement system built for a seamless external aesthetic, with a flush handle, multi-point locking and sash heights up to 1.8 metres.",
    heroImage: images.dew,
    cardImage: images.dew,
    frame: [
      { label: "Frame face width", value: "44mm" },
      { label: "Frame depth", value: "48mm / 74mm / 84mm" },
      { label: "Sash face width", value: "53mm" },
      { label: "Sash depth", value: "26mm" },
      { label: "Interlock face width", value: "32mm" },
      { label: "Wall thickness", value: "Min. 1.2mm" },
    ],
    glazing: [{ label: "Glass thickness", value: "5–8mm" }],
    sash: [
      { label: "Sash — min", value: "600 × 500mm" },
      { label: "Sash — max", value: "1500 × 800mm" },
      { label: "Max sash weight", value: "30kg (non-concealed)" },
    ],
    performance: [
      { label: "Wind load resistance", value: "1500 Pa" },
      { label: "Air permeability", value: "300 Pa" },
      { label: "Water tightness", value: "200 Pa" },
    ],
    hardware: "Aluminium and stainless steel, single locking systems.",
    applications: "Bay-window configurations with panoramic views, cross-ventilation and extended sills.",
  },
  {
    slug: "robus-30",
    family: "casement",
    name: "ROBUS 30",
    fullTitle: "Robus 30 Aluminium Casement Windows",
    category: "Casement System",
    headline: "A perfect union of minimalist design and robust performance.",
    description:
      "Slim sightlines that maximise natural light while holding structural integrity — suited to contemporary homes and commercial projects built around clean, linear aesthetics.",
    heroImage: images.lifestyleCasementGardenWarm,
    cardImage: images.lifestyleCasementGardenWarm,
    frame: [
      { label: "Frame face width", value: "44mm" },
      { label: "Frame depth", value: "48mm / 74mm / 84mm" },
      { label: "Sash face width", value: "53mm" },
      { label: "Sash depth", value: "26mm" },
      { label: "Interlock face width", value: "32mm" },
      { label: "Wall thickness", value: "Min. 1.2mm" },
    ],
    glazing: [{ label: "Glass thickness", value: "5–8mm" }],
    sash: [
      { label: "Sash — min", value: "600 × 500mm" },
      { label: "Sash — max", value: "1500 × 800mm" },
      { label: "Max sash weight", value: "30kg (non-concealed)" },
    ],
    performance: [
      { label: "Wind load resistance", value: "1500 Pa" },
      { label: "Air permeability", value: "300 Pa" },
      { label: "Water tightness", value: "200 Pa" },
    ],
    hardware: "Aluminium / stainless steel, single locking with multi-point options.",
    applications: "Fixed, in/out opening, top-hung and combined typologies.",
  },
  {
    slug: "robus-40",
    family: "casement",
    name: "ROBUS 40",
    fullTitle: "Robus 40 Aluminium Casement Windows & Doors",
    category: "Casement System",
    headline: "A solid design for windows and doors up to 2.4 metres.",
    description:
      "Visible-frame aesthetics with enhanced sturdiness — a 40mm frame depth, double glazing support up to 28mm, and injection-moulded corner and centre-seal gaskets for improved insulation. Offered as casement windows, casement doors and a fold & slide configuration.",
    heroImage: images.feature,
    cardImage: images.feature,
    frame: [
      { label: "Frame face width", value: "44mm (65mm on fold & slide)" },
      { label: "Frame depth", value: "48mm / 74mm / 84mm (40mm or 140mm low-threshold on fold & slide)" },
      { label: "Sash face width", value: "53mm (96mm / 197mm folding on fold & slide)" },
      { label: "Interlock face width", value: "32mm" },
      { label: "Wall thickness", value: "Min. 1.2mm (1.5mm on fold & slide)" },
    ],
    glazing: [{ label: "Glass thickness", value: "5–8mm (6–28mm on fold & slide)" }],
    sash: [
      { label: "Windows — max", value: "1500 × 800mm, 30kg" },
      { label: "Doors — max", value: "2100 × 1000mm, 50kg" },
      { label: "Fold & slide — max", value: "2700 × 900mm, 80kg (concealed one side)" },
    ],
    performance: [
      { label: "Wind load — windows/doors", value: "1500 Pa" },
      { label: "Wind load — fold & slide", value: "2000 Pa" },
      { label: "Air permeability", value: "300 Pa (600 Pa fold & slide)" },
      { label: "Water tightness", value: "200 Pa (300 Pa fold & slide)" },
    ],
    hardware: "Aluminium / stainless steel, multi-point locking across all variants.",
    applications: "Windows, doors and fold & slide systems for openings up to 2.4 metres.",
  },
];

export const productFamilies = {
  sliding: {
    name: "Sliding",
    href: "/sliding/",
    description: "Panoramic openings engineered to disappear — from slender residential frames to all-around concealed panoramic glazing.",
  },
  casement: {
    name: "Casement",
    href: "/casement/",
    description: "Precision-hinged systems built for airtight seals, concealed hardware and uncompromising sightlines.",
  },
} as const;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(slug: string, count = 3) {
  const current = getProduct(slug);
  if (!current) return [];
  const sameFamily = products.filter((p) => p.slug !== slug && p.family === current.family);
  const rest = products.filter((p) => p.slug !== slug && p.family !== current.family);
  return [...sameFamily, ...rest].slice(0, count);
}
