"use client";

import { useEffect } from "react";

export default function GoogleTranslateMenu() {
  useEffect(() => {
    const addScript = () => {
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);

        (window as any).googleTranslateElementInit = () => {
          new (window as any).google.translate.TranslateElement(
            {
              pageLanguage: "en",
              layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            "google_translate_element"
          );
        };
      }
    };
    addScript();
  }, []);

  return (
    <>
      <div id="google_translate_element" className="notranslate"></div>
      <style jsx global>{`
        .goog-logo-link,
        .goog-te-gadget span {
          display: none !important;
        }
        .goog-te-gadget {
          font-size: 0 !important;
        }
        .goog-te-combo {
          margin: 0;
          padding: 6px 10px;
          border: 1px solid #000;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          background: #fff;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
