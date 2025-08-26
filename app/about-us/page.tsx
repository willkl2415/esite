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
            alt="Our Founder"
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover w-full h-[350px]"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Founder</h2>
          <p className="text-gray-700 leading-relaxed">
            Cigar Manor was founded in the year of the pandemic 2021 by
            entrepreneur <strong>Sarisap B.K.</strong>, a former boxer with a
            deep passion for cigars. During his fighting career, cigars became a
            way to unwind and reflect after long, grueling bouts in the ring.
            Inspired by the wisdom and guidance of his late father{" "}
            <strong>M.S. Ullah</strong>, he created Cigar Manor to share this
            love and joy for cigars with the world.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-bold mb-4">Our Story Continues</h2>
          <p className="text-gray-700 leading-relaxed">
            The Manor has grown from a humble vision into a modern destination
            for cigar lovers across the globe. Alongside the founder, our team
            brings together experience, tradition, and a touch of modern flair —
            proving that cigars are more than just smoke; they are heritage,
            community, and craft.
          </p>
          <p className="text-gray-700 mt-4 italic">
            (This section will be updated with the second profile once the
            client provides final details.)
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="/history-F4.png"   // ✅ fixed case-sensitive path
            alt="Our Story"
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover w-full h-[350px]"
          />
        </div>
      </div>
    </div>
  );
}
