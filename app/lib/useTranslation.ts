"use client";

import { useState } from "react";
import en from "../../public/locales/en/common.json";
import es from "../../public/locales/es/common.json";
import fr from "../../public/locales/fr/common.json";

const translations: Record<string, Record<string, string>> = {
  en,
  es,
  fr,
};

export function useTranslation() {
  const [locale, setLocale] = useState("en");

  const t = (key: string) => {
    return translations[locale][key] || key;
  };

  return { t, locale, setLocale };
}
