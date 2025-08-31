"use client";
import { useEffect } from "react";

export default function GoogleTranslateMenu() {
  useEffect(() => {
    const addScript = () => {
      if (document.getElementById("google-translate-script")) return;

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);

      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      };
    };

    addScript();
  }, []);

  return <div id="google_translate_element" />;
}
