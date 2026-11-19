export const primaryNav = [
  { label: "Products", href: "/products/" },
  { label: "Projects", href: "/projects/" },
  { label: "About", href: "/about-us/" },
  { label: "Insights", href: "/insights/" },
] as const;

export const secondaryNav = [
  { label: "Architects", href: "/architects/" },
  { label: "Fabricators", href: "/fabricators/" },
  { label: "Contact", href: "/contact-us/" },
] as const;

export const footerLinks = {
  products: [
    { name: "Sliding Systems", href: "/sliding/" },
    { name: "Casement Systems", href: "/casement/" },
    { name: "Facade & Sky Lights", href: "/facade-sky-lights/" },
    { name: "All Products", href: "/products/" },
  ],
  company: [
    { name: "About Prominance", href: "/about-us/" },
    { name: "Projects", href: "/projects/" },
    { name: "Insights", href: "/insights/" },
    { name: "Architects", href: "/architects/" },
    { name: "Fabricators", href: "/fabricators/" },
    { name: "Contact", href: "/contact-us/" },
  ],
} as const;
