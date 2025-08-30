"use client";

import { useEffect } from "react";

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
    <div
      id="google_translate_element"
      className="flex items-center cursor-pointer"
    >
      <button id="custom_translate_button">🌐 Menu</button>
    </div>
  );
}
