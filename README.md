# UNIFRAME — Website

An ultra-premium architectural brand site for UNIFRAME aluminium window, door and facade systems, built with Astro, Tailwind CSS v4, GSAP/ScrollTrigger and Lenis.

## Stack

- **Astro 7** — static-site generation, islands architecture, built-in image optimization (`astro:assets`)
- **Tailwind CSS v4** — CSS-first theme in `src/styles/global.css`
- **GSAP + ScrollTrigger + Lenis** — scroll reveals, smooth scroll, counters, custom cursor (`src/animations/site.ts`)
- **TypeScript** throughout

## Project structure

```text
src/
  assets/media/    real product & architectural imagery (build-time optimized to WebP)
  assets/images.ts central import map for the above
  components/      Header, Footer, Frame (signature motif), ProductDetail, ProductList, ContactForm, ...
  sections/        homepage sections (Hero, Material, Engineering, ProductCollection, Finishes, ...)
  data/            products.ts, solutions.ts, projects.ts, finishes.ts, insights.ts, company.ts, nav.ts
                   — all copy and specs are sourced from uniframe.com (Sep 2026 audit); do not add
                   unverified claims or numbers to these files
  layouts/         BaseLayout.astro (SEO meta, fonts, header/footer shell)
  pages/           one file per real UNIFRAME URL (/graf-45/, /livio/, /about-us/, ...)
```

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` (falls back to next free port) |
| `npm run build` | Build the static site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npx astro check` | Type-check all `.astro`/`.ts` files |

## Notes

- The contact form (`src/components/ContactForm.astro`) currently submits via a `mailto:` link, since no backend/form service was specified. Swap in Netlify Forms, Formspree, or a custom endpoint before launch if a server-side submission is required.
- `ogImage` meta tags reference the original files in `public/media/` directly (not the optimized `src/assets` copies) since they're fetched once by social crawlers rather than on every page load.
