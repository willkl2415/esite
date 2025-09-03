"use client";

import Image from "next/image";
import Link from "next/link";

export default function ConnoisseursPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left: Title */}
          <h1 className="text-5xl font-bold md:col-span-1">
            Crafted for Connoisseurs
          </h1>

          {/* Middle: Text */}
          <div className="space-y-6 md:col-span-1 text-lg text-gray-700">
            <p>
              Cigar Manor caters to both novices and seasoned aficionados by
              providing a vast array of cigars, including renowned Cuban and
              New World varieties.
            </p>
            <p>
              Our mission is to cultivate a vibrant community and challenge
              outdated perceptions about cigar culture.
            </p>
          </div>

          {/* Right: Image */}
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="/cigar-drink.png"
              alt="Cigar and drink"
              width={350}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Return Button */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block border border-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition"
          >
            ⟵ Return Home
          </Link>
        </div>
      </section>
    </div>
  );
}
