"use client";

import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const current = params.get("lang") || "en";
    setLang(current);
  }, []);

  const handleChange = (newLang: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("lang", newLang);
    window.location.search = params.toString();
  };

  return (
    <select
      value={lang}
      onChange={(e) => handleChange(e.target.value)}
      className="border px-2 py-1 rounded text-sm"
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="fr">FR</option>
      <option value="de">DE</option>
      <option value="zh">中文</option>
      <option value="pt">PT</option>
      <option value="ar">AR</option>
      <option value="it">IT</option>
    </select>
  );
}
