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
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    }

    // Interval to continuously inject CSS into iframe
    const interval = setInterval(() => {
      const iframe: HTMLIFrameElement | null = document.querySelector(
        ".goog-te-menu-frame.skiptranslate"
      );
      if (iframe && iframe.contentDocument) {
        const css = `
          .goog-te-menu2 {
            max-height: 400px !important;
            width: 220px !important;
            overflow-y: scroll !important;
            white-space: nowrap !important;
            display: block !important;
          }
          .goog-te-menu2 * {
            display: block !important;
            text-align: left !important;
            font-size: 14px !important;
            line-height: 1.5 !important;
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
        /* Remove branding */
        .goog-logo-link,
        .goog-te-gadget img {
          display: none !important;
        }
        .goog-te-gadget {
          font-size: 0 !important;
        }
        /* Style dropdown button */
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
