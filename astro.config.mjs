// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://danielct2005.github.io',
  base: '/Portafolio',
  
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 0, // Evitar inlining de CSS
    }
  },

  integrations: [mdx()]
});