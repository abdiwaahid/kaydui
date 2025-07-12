// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site:'https://abdiwaahid.github.io/',
  base:'/kaydui',
  markdown: {
    syntaxHighlight: "prism",
  },
  vite: {
    plugins: [tailwindcss()]
  }
});