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

    // Fix inside iframe after widget loads
    const interval = setInterval(() => {
      const iframe: HTMLIFrameElement | null = document.querySelector(
        ".goog-te-menu-frame.skiptranslate"
      );
      if (iframe && iframe.contentDocument) {
        const styleTag = iframe.contentDocument.createElement("style");
        styleTag.innerHTML = `
          * {
            font-family: Arial, sans-serif !important;
          }
          .goog-te-menu2 {
            max-width: 220px !important;
            width: 100% !important;
          }
          .goog-te-menu2-item div,
          .goog-te-menu2-item:link div,
          .goog-te-menu2-item:visited div,
          .goog-te-menu2-item:active div {
            white-space: nowrap !important;
            display: block !important;
          }
        `;
        if (!iframe.contentDocument.head.querySelector("style")) {
          iframe.contentDocument.head.appendChild(styleTag);
          clearInterval(interval);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
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
