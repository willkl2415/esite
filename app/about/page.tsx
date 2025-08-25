"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-12">🌿 About Us</h1>

      {/* Founder Profile 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div className="relative w-full h-80">
          <Image
            src="/history-1.png" // placeholder until client provides real image
            alt="Founder of Cigar Manor"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Founder</h2>
          <p className="text-lg leading-relaxed">
            Cigar Manor was founded in the year of the pandemic 2021 by
            entrepreneur <strong>Sarisap B.K.</strong>, a former boxer with a
            deep passion for cigars. During his fighting career, cigars became
            a way to unwind and reflect after long, grueling bouts in the ring.
            Inspired by the wisdom and guidance of his late father
            <strong> M.S. Ullah</strong>, he created Cigar Manor to share this
            love and joy for cigars with the world.
          </p>
        </div>
      </div>

      {/* Profile 2 (Placeholder with History-F4.png) */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-semibold mb-4">Our Story Continues</h2>
          <p className="text-lg leading-relaxed">
            The Manor has grown from a humble vision into a modern destination
            for cigar lovers across the globe. Alongside the founder, our team
            brings together experience, tradition, and a touch of modern flair —
            proving that cigars are more than just smoke; they are heritage,
            community, and craft.
            <br />
            <br />
            <em>(This section will be updated with the second profile once the client provides their photo and narrative.)</em>
          </p>
        </div>
        <div className="relative w-full h-80 order-1 md:order-2">
          <Image
            src="/History-F4.png" // placeholder until client provides real image
            alt="Second profile"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
