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
        /* Hide Google branding */
        .goog-logo-link,
        .goog-te-gadget img {
          display: none !important;
        }

        .goog-te-gadget {
          font-size: 0 !important;
        }

        /* Force dropdown into single column */
        .goog-te-combo {
          display: inline-block !important;
          margin: 0 !important;
          padding: 6px 12px !important;
          border: 1px solid #000 !important;
          border-radius: 6px !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          background: #fff !important;
          cursor: pointer !important;
          width: auto !important;
          min-width: 160px !important;
        }

        /* Override multi-column list */
        .goog-te-menu2 {
          max-width: 220px !important;
          width: auto !important;
        }

        .goog-te-menu2-item div,
        .goog-te-menu2-item:link div,
        .goog-te-menu2-item:visited div,
        .goog-te-menu2-item:active div {
          white-space: nowrap !important;
        }
      `}</style>
    </>
  );
}
