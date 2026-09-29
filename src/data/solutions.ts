// Verified content sourced from uniframe.com/facade-sky-lights/ and related pages. Sep 2026 audit.
import type { ImageMetadata } from "astro";
import { images } from "../assets/images";

export interface Solution {
  slug: string;
  name: string;
  headline: string;
  description: string;
  specs?: { label: string; value: string }[];
  image: ImageMetadata;
}

export const solutions: Solution[] = [
  {
    slug: "facade-sky-lights",
    name: "Facade & Sky Lights",
    headline: "Structural glazing that spans full elevations.",
    description:
      "Glass-to-glass corner joints and multi-floor coverage let facades and sky lights read as a single unbroken plane, from a single window to a full building envelope.",
    specs: [
      { label: "Frame face width", value: "55mm" },
      { label: "Frame depth", value: "55mm & 110mm" },
      { label: "Wall thickness", value: "2mm" },
      { label: "Glass capacity", value: "Up to 24mm" },
      { label: "Wind load resistance", value: "Designed for 2000 Pa" },
      { label: "Sash size range", value: "1m² — 36m²" },
    ],
    image: images.skylightWireframe,
  },
  {
    slug: "aluminium-skirting",
    name: "Aluminium Skirting",
    headline: "A modern alternative to stone or tile.",
    description:
      "A sleek skirting system that protects walls from water and dirt, with an optional integrated lighting line for a precise architectural edge.",
    image: images.detailSkirtingRosegold,
  },
  {
    slug: "aluminium-shrouds",
    name: "Aluminium Shrouds",
    headline: "Shade, privacy and definition.",
    description:
      "Sun shading and glare reduction with enhanced privacy, finished with perimeter lighting that highlights the building's architectural lines after dark.",
    image: images.lifestyleExteriorDusk,
  },
  {
    slug: "geometrical-windows",
    name: "Geometrical & Corner Windows",
    headline: "Any angle, any shape, precision-engineered.",
    description:
      "Triangle, hexagon, pentagon and octagon openings, plus glass-to-glass corner joints and bay configurations — engineered case-by-case on the same 6063 T-6 platform as the rest of the range.",
    image: images.solutionBayWindow,
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
