"use client";

import Image from "next/image";

export default function AboutPage() {
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
            Born in the fight, forged in 2021. Cigar Manor is the vision of{" "}
            <strong>Sarisap B.K.</strong> — a boxer who learned that cigars
            weren’t just smoke, but the ritual after the war, the calm after the
            clash. Every round in the ring was followed by reflection in the
            glow. Guided by the wisdom of his late father,{" "}
            <strong>M.S. Ullah</strong>, he built Cigar Manor as more than a
            brand — it’s a legacy carried forward, a lifestyle redefined, and
            proof that from struggle comes culture.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-bold mb-4">Barbara Kerekes</h2>
          <p className="text-gray-700 leading-relaxed">
            Cigar Manor isn’t just a name; it’s a spark that fuels a global
            scene – where every cigar is culture in your hand. We don’t just
            sell cigars; we serve heritage reimagined, culture amplified, and a
            lifestyle without limits – where old-world craft collides with
            next-gen cool.
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
assName="rounded-lg shadow-lg object-cover w-full h-[350px]"
          />
        </div>
      </div>
    </div>
  );
}
