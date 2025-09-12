"use client";

import { useEffect, useRef, useState } from "react";

type Lang = { code: string; label: string };

const LANGS: Lang[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "ar", label: "Arabic" },
  { code: "zh-CN", label: "Chinese (Simplified)" },
  { code: "zh-TW", label: "Chinese (Traditional)" },
  { code: "ja", label: "Japanese" },
  { code: "ko", label: "Korean" },
];

export default function GoogleTranslateMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Load Google Translate once
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  // Always clear Google's persistent cookie so default is English
  useEffect(() => {
    document.cookie = "googtrans=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
    const iframe = document.querySelector<HTMLIFrameElement>(
      ".goog-te-banner-frame"
    );
    if (iframe) iframe.remove();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const switchLang = (code: string) => {
    const combo: HTMLSelectElement | null = document.querySelector(
      "select.goog-te-combo"
    );
    if (!combo) return;
    combo.value = code;
    combo.dispatchEvent(new Event("change"));
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <div id="google_translate_element" style={{ display: "none" }} />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="px-4 py-2 border border-black rounded-lg font-semibold hover:bg-black hover:text-white transition"
      >
        Select Language
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 max-h-96 overflow-y-auto bg-white border border-black rounded-lg shadow-lg z-50">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => switchLang(l.code)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style jsx global>{`
        .goog-logo-link,
        .goog-te-gadget img,
        .goog-te-banner-frame,
        #goog-gt-tt,
        .goog-te-balloon-frame {
          display: none !important;
        }
        body {
          top: 0px !important;
        }
        .goog-te-gadget {
          font-size: 0 !important;
          line-height: 0 !important;
        }
        .goog-te-gadget .goog-te-combo {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
