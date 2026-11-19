// Journal articles — metadata and full text from the Uniframe blog (uniframe.com/blog/), reproduced here so the
// Journal reads inside the site. Each article links back to its original page.
import type { ImageKey } from "../assets/images";

export interface Insight {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  iso: string;
  readMinutes: number;
  /** key into src/assets/images.ts used for the article's hero and card */
  image: ImageKey;
  /** the original article on uniframe.com */
  source: string;
}

export const insights: Insight[] = [
  {
    "slug": "aluminium-durability",
    "title": "Aluminium Window Durability Guide: How Many Years Will Your Windows Last?",
    "description": "Discover how long aluminium windows last, key durability factors, and why they’re ideal for Indian homes. Learn lifespan, maintenance tips, and benefits.",
    "excerpt": "When choosing new windows for your home or office, durability is often a key factor. Indian homeowners want windows that are long-lasting, weather-resistant, low-maintenance, and…",
    "readMinutes": 6,
    "category": "Windows",
    "author": "Jegadeesh",
    "date": "December 12, 2025",
    "iso": "2025-12-12",
    "image": "lifestyleExteriorDusk",
    "source": "https://uniframe.com/windows/aluminium-durability/"
  },
  {
    "slug": "check-quality-of-aluminium-windows",
    "title": "How to Check the Quality of Aluminium Windows",
    "description": "Learn how to check the quality of aluminium windows durability, frame strength, coatings, and sealing tips. A smart buyer’s guide by Uniframe.",
    "excerpt": "Choosing the right aluminium windows can have a major impact on your home. Good windows improve comfort, security, energy efficiency, and long-term value. Aluminium has become a popular…",
    "readMinutes": 6,
    "category": "Windows",
    "author": "Jegadeesh",
    "date": "November 22, 2025",
    "iso": "2025-11-22",
    "image": "materialExtrusionMacro",
    "source": "https://uniframe.com/windows/check-quality-of-aluminium-windows/"
  },
  {
    "slug": "types-of-casement-windows",
    "title": "Types of casement windows",
    "description": "People like casement windows because they look nice, let in a lot of air, and save energy.   There are hinges on the sides of these windows that",
    "excerpt": "People like casement windows because they look nice, let in a lot of air, and save energy. There are hinges on the sides of these windows that let them open either out or in. This lets…",
    "readMinutes": 3,
    "category": "Casement Window",
    "author": "Jegadeesh",
    "date": "November 17, 2025",
    "iso": "2025-11-17",
    "image": "lifestyleCasementGardenWarm",
    "source": "https://uniframe.com/windows/casement-window/types-of-casement-windows/"
  }
];

export const getInsight = (slug: string) => insights.find((p) => p.slug === slug);
