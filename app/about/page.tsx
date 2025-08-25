"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-2">
        <span role="img" aria-label="leaf">🌿</span> About Us
      </h1>

      <div className="space-y-16">
        {/* Profile 1 - Image Left / Text Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/history-1.png"
              alt="Founder Placeholder"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Founder</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Cigar Manor was founded in the year of the pandemic 2021 by
              entrepreneur <strong>Sarisap B.K.</strong>, a former boxer with a
              deep passion for cigars. During his fighting career, cigars
              became a way to unwind and reflect after long, grueling bouts in
              the ring. Inspired by the wisdom and guidance of his late father{" "}
              <strong>M.S. Ullah</strong>, he created Cigar Manor to share this
              love and joy for cigars with the world.
            </p>
          </div>
        </div>

        {/* Profile 2 - Text Left / Image Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold mb-4">Our Story Continues</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              The Manor has grown from a humble vision into a modern destination
              for cigar lovers across the globe. Alongside the founder, our team
              brings together experience, tradition, and a touch of modern flair
              — proving that cigars are more than just smoke; they are heritage,
              community, and craft.
            </p>
            <p className="text-sm italic text-gray-500 mt-4">
              (This section will be updated with the second profile once the
              client provides details.)
            </p>
          </div>
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
            <Image
              src="/history-f4.png"
              alt="Second Profile Placeholder"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
