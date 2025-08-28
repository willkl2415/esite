// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    // ✅ List all supported languages
    locales: ["en", "es", "fr"],
    // ✅ Default language (site will load in English first)
    defaultLocale: "en",
  },
  // You can still add other config options later if needed
};

export default nextConfig;
