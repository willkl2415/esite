import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "es", "fr"], // supported languages
    defaultLocale: "en",         // fallback
  },
};

export default nextConfig;
