"use client";

import { useEffect } from "react";

export default function GoogleTranslateMenu() {
  useEffect(() => {
    // Load Google Translate once
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
            layout:
              (window as any).google.translate.TranslateElement.InlineLayout
                .SIMPLE,
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  return (
    <>
      {/* Our own label so we can hide Google's "gadget-simple" link */}
      <div className="inline-flex items-center gap-2">
        <span className="text-sm font-semibold">Select Language</span>
        <div id="google_translate_element" className="notranslate" />
      </div>

      {/* Force Google widget to show the native <select> (vertical list) and hide the multi-column overlay trigger */}
      <style jsx global>{`
        /* Hide Google's branding */
        .goog-logo-link,
        .goog-te-gadget img {
          display: none !important;
        }

        /* Hide the "gadget-simple" clickable link that opens the multi-column overlay */
        #google_translate_element .goog-te-gadget-simple {
          display: none !important;
        }

        /* Ensure the native <select> is visible and styled */
        #google_translate_element .goog-te-combo {
          display: inline-block !important;
          margin: 0 !important;
          padding: 6px 12px !important;
          border: 1px solid #000 !important;
          border-radius: 6px !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          background: #fff !important;
          color: #000100 !important;
          cursor: pointer !important;
          width: auto !important;
          min-width: 160px !important;
          appearance: auto !important;
          -webkit-appearance: menulist !important;
          -moz-appearance: menulist !important;
        }

        /* Keep widget compact */
        #google_translate_element .goog-te-gadget {
          font-size: 0 !important;
          line-height: 0 !important;
        }
      `}</style>
    </>
  );
}
