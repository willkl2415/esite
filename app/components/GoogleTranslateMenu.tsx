"use client";

import { useEffect } from "react";

export default function GoogleTranslateMenu() {
  useEffect(() => {
    // already loaded?
    if (document.getElementById("google-translate-script")) return;

    // load Google Translate
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    // init WITHOUT InlineLayout.SIMPLE (that overlay is the multi-column menu)
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false, // no auto-popup banner
          // NOTE: do NOT set 'layout' here; we want the native <select> .goog-te-combo
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <>
      <div id="google_translate_element" className="notranslate" />

      <style jsx global>{`
        /* hide Google branding only */
        .goog-logo-link,
        .goog-te-gadget img {
          display: none !important;
        }

        /* keep container tight but DO NOT hide the select */
        .goog-te-gadget {
          font-size: 0 !important; /* hides "Powered by Google" text */
          line-height: 0 !important;
        }

        /* show + style the native <select> (single vertical list when opened) */
        .goog-te-combo {
          margin: 0 !important;
          padding: 6px 12px !important;
          border: 1px solid #000 !important;
          border-radius: 6px !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          background: #fff !important;
          color: #000 !important;
          cursor: pointer !important;
        }
      `}</style>
    </>
  );
}


