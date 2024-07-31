import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  site: 'https://bregmi.com',
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    maxDuration: 8,
  }),
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), robotsTxt(), sitemap()]
});