import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { existsSync } from "node:fs";
if (existsSync(".env")) process.loadEnvFile(".env");
const siteUrl = process.env.PUBLIC_SITE_URL || "https://mirandadevsource.com";
export default defineConfig({
  site: siteUrl,
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      // The root permanently redirects to /es/, so only final canonical URLs
      // belong in the sitemap. Language alternates live in each page's head.
      filter: (page) => page !== `${siteUrl}/` && !page.endsWith("/404/"),
    }),
  ],
});
