"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#ff9800] text-center">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center flex-1 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Cigar Manor
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10">
          Where Heritage Meets Indulgence
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="/awarded-cigars"
            className="bg-black hover:bg-white hover:text-black text-[#ff9800] font-semibold px-8 py-3 rounded-full shadow-md transition"
          >
            Shop Now
          </a>
          <a
            href="/about"
            className="border border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Product Images Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold mb-10">Our Finest Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div>
            <Image
              src="/cigar-1.png"
              alt="Premium Cigar 1"
              width={400}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
            />
            <p className="mt-4 text-lg font-medium">Premium Cigar 1</p>
          </div>
          <div>
            <Image
              src="/cigar-2.png"
              alt="Premium Cigar 2"
              width={400}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
            />
            <p className="mt-4 text-lg font-medium">Premium Cigar 2</p>
          </div>
          <div>
            <Image
              src="/cigar-3.png"
              alt="Premium Cigar 3"
              width={400}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
            />
            <p className="mt-4 text-lg font-medium">Premium Cigar 3</p>
          </div>
        </div>
      </section>
    </div>
  );
}
