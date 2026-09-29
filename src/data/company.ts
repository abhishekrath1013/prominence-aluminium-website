// Verified facts sourced directly from uniframe.com (Sep 2026 audit).
// Do not add claims or numbers here that are not confirmed on the live site.

export const company = {
  name: "UNIFRAME",
  legalName: "PWDS Extrusions Private Limited",
  parentBrandLine: "PROMINANCE",
  tagline: "Prominance Your View",
  addressLine1: "538/2 Airport Service Road, Alagu Nagar,",
  addressLine2: "Civil Aerodrome Post, Coimbatore – 641014, Tamil Nadu, India",
  mapAddress:
    "PWDS Extrusions Private Limited, Airport Rd, Peelamedu, Alagu Nagar, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014",
  phoneDisplay: "1800 102 106",
  phoneHref: "tel:1800102106",
  email: "enquiry@uniframe.com",
  social: {
    facebook: "https://www.facebook.com/theuniframe",
    instagram: "https://www.instagram.com/prominance_uniframe",
    youtube: "https://www.youtube.com/@theUniframe",
    linkedin: "https://www.linkedin.com/company/prominance-uniframe",
  },
} as const;

export const sisterBrands = [
  {
    name: "Prominance",
    line: "uPVC windows and doors",
    href: "https://prominance.com",
  },
  {
    name: "Homworks",
    line: "Home interior solutions",
    href: "https://homworks.com",
  },
  {
    name: "Uniceil",
    line: "Ceiling & facade solutions",
    href: "https://theuniceil.com",
  },
] as const;

// Verified engineering facts only — sourced from uniframe.com homepage / about-us.
export const engineeringStats = [
  {
    value: "6063 T-6",
    unit: "",
    label: "Virgin aluminium alloy",
    detail: "Every profile is extruded from 6063 T-6 virgin aluminium for structural integrity and a corrosion-resistant surface.",
  },
  {
    value: "1,00,000",
    unit: "cycles",
    label: "Hardware endurance tested",
    detail: "Locking and running hardware is cycle-tested to withstand a lifetime of daily operation.",
  },
  {
    value: "25",
    unit: "years",
    label: "Warranty against surface corrosion",
    detail: "Backed by a 25-year warranty on surface finish, gaskets and hardware performance.",
  },
  {
    value: "100+",
    unit: "colours",
    label: "Finishes to choose from",
    detail: "Over 100 anodised, powder-coated and metallic finishes available across every system.",
  },
  {
    value: "100%",
    unit: "",
    label: "Recyclable aluminium",
    detail: "Naturally corrosion-resistant and fully recyclable without loss of material quality.",
  },
] as const;

export const addOns = [
  {
    name: "Architrave LEDs",
    description: "Integrated perimeter lighting that traces the frame line after dark.",
  },
  {
    name: "Full View",
    description: "Slim-sightline glazing engineered to maximise uninterrupted glass area.",
  },
  {
    name: "Georgian Bars",
    description: "Traditional glazing bars for a classic, structured facade language.",
  },
  {
    name: "Mesh",
    description: "Insect mesh integration that preserves the clean lines of the frame.",
  },
] as const;
