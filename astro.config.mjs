import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { existsSync } from "node:fs";
if (existsSync(".env")) process.loadEnvFile(".env");
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://miranda-devsource.pages.dev",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404/"),
      i18n: { defaultLocale: "es", locales: { es: "es-MX", en: "en" } },
    }),
  ],
});
