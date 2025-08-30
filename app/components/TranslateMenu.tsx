"use client";

import { useEffect } from "react";

export default function TranslateMenu() {
  useEffect(() => {
    // Inject Google Translate script if not already loaded
    const existing = document.getElementById("google-translate-script");
    if (!existing) {
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
    }
  }, []);

  const openMenu = () => {
    const frame: HTMLElement | null = document.querySelector(
      "iframe.goog-te-menu-frame"
    );
    if (frame) {
      frame.style.display = "block";
      frame.style.visibility = "visible";
      frame.style.opacity = "1";
      frame.style.zIndex = "9999";
    } else {
      alert("Language menu is still loading. Please try again in 1–2 seconds.");
    }
  };

  return (
    <div>
      {/* Hidden default widget */}
      <div id="google_translate_element" style={{ display: "none" }} />

      {/* Custom button */}
      <button
        onClick={openMenu}
        className="border px-3 py-1 rounded cursor-pointer text-sm flex items-center space-x-1"
      >
        <span role="img" aria-label="globe">
          🌐
        </span>
        <span>Menu</span>
      </button>
    </div>
  );
}
