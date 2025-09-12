"use client";

import { useEffect } from "react";

export default function GoogleTranslateMenu() {
  useEffect(() => {
    // Load Google Translate script if not already present
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

    // Interval to inject CSS into the iframe for vertical menu
    const interval = setInterval(() => {
      const iframe: HTMLIFrameElement | null = document.querySelector(
        ".goog-te-menu-frame.skiptranslate"
      );
      if (iframe && iframe.contentDocument) {
        const css = `
          .goog-te-menu2 {
            max-height: 400px !important;
            width: 220px !important;
            overflow-y: auto !important;
            overflow-x: hidden !important;
            white-space: normal !important;
          }
          .goog-te-menu2 table,
          .goog-te-menu2 tr,
          .goog-te-menu2 td {
            display: block !important;
            width: 100% !important;
          }
          .goog-te-menu2 a {
            display: block !important;
            text-align: left !important;
            font-size: 14px !important;
            line-height: 1.5 !important;
            padding: 4px 8px !important;
          }
        `;
        const doc = iframe.contentDocument;
        if (!doc.getElementById("force-vertical-style")) {
          const style = doc.createElement("style");
          style.id = "force-vertical-style";
          style.innerHTML = css;
          doc.head.appendChild(style);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="google_translate_element" className="notranslate"></div>
      <style jsx global>{`
        /* Hide branding */
        .goog-logo-link,
        .goog-te-gadget img {
          display: none !important;
        }

        /* Keep dropdown compact */
        .goog-te-gadget {
          font-size: 0 !important;
        }

        /* Style select box */
        .goog-te-combo {
          margin: 0;
          padding: 6px 12px;
          border: 1px solid #000;
          border-radius: 6px;
          font-size: 14px !important;
          font-weight: 600 !important;
          background: #fff;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
