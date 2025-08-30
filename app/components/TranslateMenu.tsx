"use client";

import { useEffect } from "react";

// Extend window type
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
        frame.style.display = "block";
        frame.style.visibility = "visible";
        frame.style.position = "absolute";
        frame.style.top = "50px"; // position under header
        frame.style.right = "10px"; // align near button
        clearInterval(interval);
      }
      attempts++;
      if (attempts > 20) clearInterval(interval); // stop after ~2s
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
