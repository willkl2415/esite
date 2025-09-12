"use client";

import { useEffect, useRef, useState } from "react";

type Lang = { code: string; label: string };

// Full language set — expanded beyond 9
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
  { code: "it", label: "Italian" },
  { code: "pt", label: "Portuguese" },
  { code: "ru", label: "Russian" },
  { code: "hi", label: "Hindi" },
  { code: "bn", label: "Bengali" },
  { code: "ur", label: "Urdu" },
  { code: "fa", label: "Persian" },
  { code: "tr", label: "Turkish" },
  { code: "nl", label: "Dutch" },
  { code: "pl", label: "Polish" },
  { code: "sv", label: "Swedish" },
  { code: "fi", label: "Finnish" },
  { code: "el", label: "Greek" },
  { code: "he", label: "Hebrew" },
  { code: "id", label: "Indonesian" },
  { code: "ms", label: "Malay" },
  { code: "th", label: "Thai" },
  { code: "vi", label: "Vietnamese" },
  { code: "uk", label: "Ukrainian" },
  { code: "cs", label: "Czech" },
  { code: "ro", label: "Romanian" },
  { code: "hu", label: "Hungarian" },
  { code: "sr", label: "Serbian" },
  { code: "bg", label: "Bulgarian" },
  { code: "hr", label: "Croatian" },
  { code: "sl", label: "Slovenian" },
  { code: "sk", label: "Slovak" },
  { code: "et", label: "Estonian" },
  { code: "lv", label: "Latvian" },
  { code: "lt", label: "Lithuanian" },
  { code: "af", label: "Afrikaans" },
  { code: "sw", label: "Swahili" },
  { code: "zu", label: "Zulu" },
  // … you can extend this list further if needed
];

export default function GoogleTranslateMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Load Google Translate script once
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
          includedLanguages: LANGS.map((l) => l.code).join(","),
          layout: (window as any).google.translate.TranslateElement
            .InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  // Always reset cookies + banner to enforce English default
  useEffect(() => {
    const expire = "Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = `googtrans=;expires=${expire};path=/;`;
    document.cookie = `googtrans=;expires=${expire};path=/;domain=.${location.hostname}`;
    try {
      localStorage.removeItem("googtrans");
    } catch {}

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

  const resetToEnglish = () => {
    switchLang("en");
    location.reload();
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
          <button
            onClick={resetToEnglish}
            className="w-full text-left px-4 py-2 font-semibold text-red-600 hover:bg-gray-100"
          >
            Reset to English
          </button>
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
