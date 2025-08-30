"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export default function TranslateMenu() {
  useEffect(() => {
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
  }, []);

  const openMenu = () => {
    let attempts = 0;
    const interval = setInterval(() => {
      const frame = document.querySelector<HTMLIFrameElement>(
        "iframe.goog-te-menu-frame"
      );
      if (frame && frame.style) {
        // ✅ Forcefully override Google’s hidden styles
        frame.style.display = "block";
        frame.style.visibility = "visible";
        frame.style.opacity = "1";
        frame.style.position = "absolute";
        frame.style.top = "60px"; // adjust position
        frame.style.right = "20px";
        frame.style.zIndex = "9999"; // bring above everything
        frame.style.width = "200px"; // optional: make it smaller
        frame.style.height = "auto";
        clearInterval(interval);
      }
      attempts++;
      if (attempts > 30) clearInterval(interval); // stop after ~3s
    }, 100);
  };

  return (
    <div className="flex items-center cursor-pointer">
      <div id="google_translate_element" className="hidden" />
      <button
        id="custom_translate_button"
        className="border px-3 py-1 rounded text-sm"
        onClick={openMenu}
      >
        🌐 Menu
      </button>
    </div>
  );
}
