import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://fyralabs.com",

  integrations: [
    icon(),
    react(),
    sitemap({ filter: (page) => page !== "https://fyralabs.com/thanks/" }),
    compress(),
    robotsTxt(),
  ],

  redirects: {
    // why are we not using pages redirects for this?
    // see: https://x.com/uvdotsh/status/1825811082822517213
    "/matrix": "https://blog.fyralabs.com/dropping-matrix/",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
