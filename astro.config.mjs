import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // output: 'static',
  site: "https://gopi2401.github.io/",
  base: "/equestsolutions/",
  // trailingSlash: "always",
  build: {
    assets: "assets",
  },
  integrations: [react({ experimentalReactChildren: true })],
});
