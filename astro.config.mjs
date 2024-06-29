import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';


export default defineConfig({
  site: 'https://feature-tour.netlify.app',
  integrations: [
    preact(),
    vue(),
    sitemap({
      canonicalURL: 'https://feature-tour.netlify.app'
    })
  ],
});
