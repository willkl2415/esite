"use client";

import Image from "next/image";
import Link from "next/link";
import { Fahkwang } from "next/font/google";

// Font
const fahkwang = Fahkwang({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function ConnoisseursPage() {
  return (
    <div
      className={`flex flex-col min-h-screen bg-white text-black ${fahkwang.className}`}
    >
      {/* Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left column: Heading */}
        <div className="md:col-span-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Crafted for <br /> Connoisseurs
          </h1>
        </div>

        {/* Middle column: Description */}
        <div className="md:col-span-1 text-gray-700 leading-relaxed">
          <p className="mb-6">
            Cigar Manor caters to both novices and seasoned aficionados by
            providing a vast array of cigars, including renowned Cuban and New
            World varieties.
          </p>
          <p>
            Our mission is to cultivate a vibrant community and challenge
            outdated perceptions about cigar culture.
          </p>
        </div>

        {/* Right column: Image */}
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="/cigar-drink.png"
            alt="Cigar and Whiskey"
            width={400}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </section>

      {/* Return button */}
      <div className="text-center my-8">
        <Link
          href="/"
          className="inline-block border border-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition"
        >
          ⟵ Return Home
        </Link>
      </div>
    </div>
  );
}
