// Central import map so every content-bearing image passes through Astro's
// build-time optimizer (WebP output, responsive srcset, no layout shift).
import heroCorner from "./media/hero-corner.jpg";
import dew from "./media/dew.jpg";
import feature from "./media/feature.jpg";
import fullView from "./media/full-view.png";
import led from "./media/led.png";
import slidingDoor from "./media/sliding-door.png";
import slidingWindow from "./media/sliding-window.png";
import casementWindow from "./media/casement-window.png";
import villa from "./media/villa.jpeg";
import villa2 from "./media/villa-2.png";
import logo from "./media/uniframe-logo.png";
import prominanceLogo from "./media/prominance-logo.png";

// Sourced from the Uniframe brand brochure (Prominance Uniframe, Nov 2025 edition).
import aboutBambooCorner from "./media/brochure/about-bamboo-corner.jpg";
import materialExtrusionMacro from "./media/brochure/material-extrusion-macro.jpg";
import facadeNightGlow from "./media/brochure/facade-night-glow.jpg";
import lifestyleExteriorDusk from "./media/brochure/lifestyle-exterior-dusk.jpg";
import detailConcreteWoodDoor from "./media/brochure/detail-concrete-wood-door.jpg";
import lifestyleFoldslideGarden from "./media/brochure/lifestyle-foldslide-garden.jpg";
import solutionBayWindow from "./media/brochure/solution-bay-window.jpg";
import solutionCornerSlider from "./media/brochure/solution-corner-slider.jpg";
import detailSkirtingRosegold from "./media/brochure/detail-skirting-rosegold.jpg";
import productFrameIsolated from "./media/brochure/product-frame-isolated.jpg";
import skylightWireframe from "./media/brochure/skylight-wireframe.jpg";
import detailMirrorCasementDoor from "./media/brochure/detail-mirror-casement-door.jpg";
import lifestyleSofaGlasswall from "./media/brochure/lifestyle-sofa-glasswall.jpg";
import heroDuskLivingroom from "./media/brochure/hero-dusk-livingroom.jpg";
import lifestyleCasementGardenWarm from "./media/brochure/lifestyle-casement-garden-warm.jpg";
import lifestyleSlidingBrightGarden from "./media/brochure/lifestyle-sliding-bright-garden.jpg";

export const images = {
  heroCorner,
  dew,
  feature,
  fullView,
  led,
  slidingDoor,
  slidingWindow,
  casementWindow,
  villa,
  villa2,
  logo,
  prominanceLogo,
  aboutBambooCorner,
  materialExtrusionMacro,
  facadeNightGlow,
  lifestyleExteriorDusk,
  detailConcreteWoodDoor,
  lifestyleFoldslideGarden,
  solutionBayWindow,
  solutionCornerSlider,
  detailSkirtingRosegold,
  productFrameIsolated,
  skylightWireframe,
  detailMirrorCasementDoor,
  lifestyleSofaGlasswall,
  heroDuskLivingroom,
  lifestyleCasementGardenWarm,
  lifestyleSlidingBrightGarden,
};

export type ImageKey = keyof typeof images;
