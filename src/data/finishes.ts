// Uniframe's actual finish fan chart ("Choosing your Aesthetics"), sourced from the brand
// brochure and organised into its three published tiers. Hex values are colour-sampled from
// the brochure's own swatch chart — a faithful reading of the printed chart, not an official
// digital colour code, since Uniframe does not publish sRGB values for these finishes.
export type FinishTier = "natural" | "solid" | "premium";

export interface Finish {
  slug: string;
  name: string;
  tier: FinishTier;
  swatch: string; // css colour, sampled from the brand fan chart
  description: string;
}

export const finishTiers: Record<FinishTier, { label: string; description: string }> = {
  natural: {
    label: "Natural Shades",
    description: "Wood-grain laminated finishes for elevations that meet timber, stone and landscape.",
  },
  solid: {
    label: "Solid Shades",
    description: "Matte powder-coated solids — the everyday palette for contemporary facades.",
  },
  premium: {
    label: "Premium Shades",
    description: "Metallic and tonal finishes reserved for signature elevations.",
  },
};

export const finishes: Finish[] = [
  // ---- Natural Shades ---------------------------------------------------
  {
    slug: "duke",
    name: "Duke",
    tier: "natural",
    swatch: "#6b4226",
    description: "A warm chestnut wood grain for frames that sit against timber joinery and stone.",
  },
  {
    slug: "rustic-charm",
    name: "Rustic Charm",
    tier: "natural",
    swatch: "#e4d2ce",
    description: "A pale, driftwood-toned grain for coastal and Mediterranean elevations.",
  },
  {
    slug: "royal-chestnut",
    name: "Royal Chestnut",
    tier: "natural",
    swatch: "#2e1512",
    description: "A deep reddish mahogany grain with old-world, library-like gravity.",
  },
  {
    slug: "citrine",
    name: "Citrine",
    tier: "natural",
    swatch: "#7a4322",
    description: "A golden amber wood grain that reads warm under both daylight and lamplight.",
  },
  {
    slug: "mustic-dark",
    name: "Mustic Dark",
    tier: "natural",
    swatch: "#47281a",
    description: "A dark walnut grain for frames that recede into shadowed verandas.",
  },
  // ---- Solid Shades -------------------------------------------------------
  {
    slug: "slate",
    name: "Slate",
    tier: "solid",
    swatch: "#6e7686",
    description: "A cool blue-grey matte, precise against concrete and glass.",
  },
  {
    slug: "mocha",
    name: "Mocha",
    tier: "solid",
    swatch: "#aa7c6d",
    description: "A dusty mauve-brown matte with a soft, residential warmth.",
  },
  {
    slug: "urban-mist",
    name: "Urban Mist",
    tier: "solid",
    swatch: "#bcbebd",
    description: "A light warm grey — Prominance's most specified urban finish.",
  },
  {
    slug: "noir",
    name: "Noir",
    tier: "solid",
    swatch: "#25272c",
    description: "A matte architectural black, the signature finish for contemporary elevations.",
  },
  {
    slug: "frost",
    name: "Frost",
    tier: "solid",
    swatch: "#e7ebf1",
    description: "A pale ice-white matte for crisp, minimalist facades.",
  },
  // ---- Premium Shades -----------------------------------------------------
  {
    slug: "cedar",
    name: "Cedar",
    tier: "premium",
    swatch: "#555451",
    description: "A dark graphite tone with a soft metallic depth.",
  },
  {
    slug: "dew",
    name: "Dew",
    tier: "premium",
    swatch: "#e7eef8",
    description: "A pale, pearlescent blue-white for glass-forward elevations.",
  },
  {
    slug: "urban-dusk",
    name: "Urban Dusk",
    tier: "premium",
    swatch: "#7a7657",
    description: "An olive-khaki metallic that pairs with stone, timber and greenery alike.",
  },
  {
    slug: "caramel",
    name: "Caramel",
    tier: "premium",
    swatch: "#cea68e",
    description: "A warm terracotta metallic for sunlit, southern-facing facades.",
  },
  {
    slug: "hazel",
    name: "Hazel",
    tier: "premium",
    swatch: "#c6bfb6",
    description: "A warm taupe-grey metallic with a soft, brushed lustre.",
  },
];

export function getFinish(slug: string) {
  return finishes.find((f) => f.slug === slug);
}

export function finishesByTier(tier: FinishTier) {
  return finishes.filter((f) => f.tier === tier);
}
