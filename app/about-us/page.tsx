"use client";

import Image from "next/image";
import { labels } from "../dictionary";

export default function AboutPage() {
  const lang =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("lang") || "en"
      : "en";

  const t = labels[lang] || labels.en;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/history-1.png"
            alt="Salman Khan ULLAH"
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover w-full h-[350px]"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Salman Khan ULLAH</h2>
          <p className="text-gray-700 leading-relaxed">
            {t.aboutSection1}
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-bold mb-4">Barbara Kerekes</h2>
          <p className="text-gray-700 leading-relaxed">
            {t.aboutSection2}
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="/history-F4.png"
            alt="Barbara Kerekes"
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover w-full h-[350px]"
          />
        </div>
      </div>
    </div>
  );
}
