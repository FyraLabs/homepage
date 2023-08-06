import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
// import compress from "astro-compress";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://fyralabs.com",
  integrations: [
    tailwind(),
    react(),
    image(),
    sitemap({ filter: (page) => page !== "https://fyralabs.com/thanks/" }),
    // compress(),
    robotsTxt(),
  ],
});
