"use client";

import Image from "next/image";
import Link from "next/link";
import products from "./data/products";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* === Hero Section === */}
      <section className="relative w-full h-[90vh] flex items-center justify-center text-center bg-gradient-to-b from-black via-[#000100] to-[#1a1a1a] text-white">
        {/* Background overlay smoke effect (placeholder gradient now) */}
        <div className="absolute inset-0 opacity-30 bg-[url('/cigar-smoke-bg.jpg')] bg-cover bg-center" />

        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            Cigar Manor
          </h1>
          <p className="mt-4 text-xl md:text-2xl italic text-gray-200">
            Culture. Craft. Cool.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/awarded-cigars"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff9800] to-[#ffb84d] text-black font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Shop the Vibe
            </Link>
            <Link
              href="/about-us"
              className="px-6 py-3 rounded-full border border-[#ff9800] text-[#ff9800] hover:bg-[#ff9800] hover:text-black transition-colors"
            >
              Discover the Culture
            </Link>
          </div>
        </div>
      </section>

      {/* === Lifestyle Showcase === */}
      <section className="w-full py-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Bold. Classic. Legendary.
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 px-6">
          <div className="relative w-full md:w-1/3 h-80 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/cigar-drink.png"
              alt="Cigar and Whiskey"
              fill
              className="object-cover hover:scale-110 transition-transform"
            />
          </div>
          <div className="relative w-full md:w-1/3 h-80 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/cigar-couple.png"
              alt="Cigar Lifestyle"
              fill
              className="object-cover hover:scale-110 transition-transform"
            />
          </div>
          <div className="relative w-full md:w-1/3 h-80 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/cigar-manor.png"
              alt="Cigar Culture"
              fill
              className="object-cover hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* === Curated Selection === */}
      <section className="w-full py-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Curated Selection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="relative w-full h-72">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500 mb-4">£{product.price.toFixed(2)}</p>
                <Link
                  href={`/${product.category}/${product.id}`}
                  className="inline-block px-5 py-2 rounded-full bg-[#ff9800] text-black font-semibold hover:bg-black hover:text-[#ff9800] transition-colors"
                >
                  Try Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === Brand Story === */}
      <section className="w-full py-20 bg-white flex flex-col md:flex-row items-center gap-12 px-6 md:px-20">
        <div className="relative w-full md:w-1/2 h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/history-2.png"
            alt="Cigar Story"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            More Than Cigars
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Cigar Manor isn’t just cigars — it’s a scene. Born from heritage,
            reimagined for a new generation. A place where tradition meets
            modern cool, and every draw tells a story.
          </p>
          <Link
            href="/about-us"
            className="px-6 py-3 rounded-full bg-black text-[#ff9800] font-semibold hover:bg-[#ff9800] hover:text-black transition-colors"
          >
            Read the Story
          </Link>
        </div>
      </section>

      {/* === Community / Social === */}
      <section className="w-full py-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Join the Manor
        </h2>
        <p className="text-gray-600 mb-8">
          Follow us for pairings, culture, and behind-the-scenes moments.
        </p>
        <div className="flex justify-center gap-6 text-3xl">
          <Link href="https://x.com" target="_blank" className="hover:text-[#ff9800]">
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-[#ff9800]">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link href="https://tiktok.com" target="_blank" className="hover:text-[#ff9800]">
            <i className="fa-brands fa-tiktok"></i>
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-[#ff9800]">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </div>
      </section>
    </main>
  );
}
