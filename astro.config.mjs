// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://uniframe.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    responsiveStyles: true,
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'DM Serif Display',
      cssVariable: '--font-display-raw',
      weights: ['400'],
      styles: ['normal', 'italic'],
    },
    {
      provider: fontProviders.google(),
      name: 'Manrope',
      cssVariable: '--font-sans-raw',
      weights: ['300', '400', '500', '600', '700'],
    },
  ],
});
