"use client";

import { useEffect } from "react";

// Extend window type so TS doesn’t complain
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export default function TranslateMenu() {
  useEffect(() => {
    const addScript = () => {
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            { pageLanguage: "en" },
            "google_translate_element"
          );
        };
      }
    };
    addScript();
  }, []);

  return (
    <div className="flex items-center cursor-pointer">
      <div id="google_translate_element" className="hidden" />
      <button id="custom_translate_button" className="border px-3 py-1 rounded text-sm">
        🌐 Menu
      </button>
    </div>
  );
}
