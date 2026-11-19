// Architectural application imagery. UNIFRAME does not publish a public project case-study
// archive, so these entries are captioned only by system + setting — never a fabricated
// client name, address or completion date.
import type { ImageMetadata } from "astro";
import { images } from "../assets/images";

export interface Project {
  slug: string;
  title: string;
  system: string; // product slug reference
  systemName: string;
  image: ImageMetadata;
}

export const projects: Project[] = [
  {
    slug: "panoramic-hillside-residence",
    title: "Panoramic Hillside Residence",
    system: "graf-73",
    systemName: "GRAF 73",
    image: images.villa,
  },
  {
    slug: "coastal-cliffside-elevation",
    title: "Coastal Cliffside Elevation",
    system: "graf-32",
    systemName: "GRAF 32",
    image: images.villa2,
  },
  {
    slug: "urban-skyline-interior",
    title: "Urban Skyline Interior",
    system: "graf-45",
    systemName: "GRAF 45",
    image: images.lifestyleSofaGlasswall,
  },
  {
    slug: "courtyard-fold-and-slide",
    title: "Courtyard Fold & Slide Pavilion",
    system: "robus-40",
    systemName: "ROBUS 40",
    image: images.feature,
  },
  {
    slug: "multi-floor-facade",
    title: "Multi-Floor Facade Glazing",
    system: "facade-sky-lights",
    systemName: "FACADE SYSTEMS",
    image: images.fullView,
  },
  {
    slug: "concrete-corner-suite",
    title: "Concrete Corner Suite",
    system: "graf-45",
    systemName: "GRAF 45",
    image: images.heroCorner,
  },
];
