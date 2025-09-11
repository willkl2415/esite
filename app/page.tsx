"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { products } from "./data/products";
import { labels } from "./dictionary";
import { Fahkwang } from "next/font/google";

// Load Fahkwang font
const fahkwang = Fahkwang({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HomePage() {
  const lang =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("lang") || "en"
      : "en";

  const t = labels[lang] || labels.en;

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // List of images provided
  const carouselImages = [
    "new-10.png",
    "new-9.png",
    "new-8.png",
    "new-7.png",
    "new-6.png",
    "new-5.png",
    "new-4.png",
    "new-3.png",
    "new-2.png",
    "new-1.png",
    "hero-2.png",
    "hero-1.png",
    "cigar-guide-8.png",
    "cigar-guide-5.png",
    "cigar-guide-1.png",
    "cigar-guide-4.png",
    "cigar-guide-6.png",
    "cigar-drink.png",
    "f-24.png",
    "f-25.png",
    "partagas-maestro.png",
    "romeo-wide-churchill.png",
    "cigar-guide-9.png",
    "f-29.png",
    "f-28.png",
    "f-26.png",
    "f-23.png",
    "f-22.png",
    "cohiba-robusto.png",
    "bolivar.png",
    "cigar-couple.png",
    "cigar-13.png",
    "cigar-14.png",
    "cigar-guide-2.png",
    "Cohiba-Connecticut-Robusto-cigar.png",
    "cigar-11.png",
    "cigar-5.png",
    "cigar-6.png",
    "history-F2.png",
    "history-F1.png",
    "history-F4.png",
    "history-F3.png",
    "cigar-4.png",
    "history-1.png",
    "history-8.png",
    "history-2.png",
    "cigar-9.png",
    "history-6.png",
    "cigar-7.png",
    "history-4.png",
    "cigar-8.png",
    "history-5.png",
    "history-3.png",
    "cigar-10.png",
    "cigar-2.png",
    "cigar-3.png",
    "cigar-1.png",
    "f-27.png",
  ];

  return (
    <div
      className={`flex flex-col min-h-screen bg-white text-black ${fahkwang.className}`}
    >
      {/* === Hero Section === */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Where Cigars Come Alive
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Cigar Manor is your gateway to the world of cigars - discover and
            enjoy the flavours, and then make it your own.
          </p>
        </div>

        {/* Four Lifestyle Images */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src="/new-2.png"
              alt="New 2"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src="/cigar-15.png"
              alt="Cigar 15"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src="/cigar-guide-4.png"
              alt="Cigar Guide 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src="/f-30.png"
              alt="F 30"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* === Product Carousel === */}
      <section className="py-16 bg-white relative">
        <h2 className="text-3xl font-bold mb-10 text-center">
          {t.finestSelection}
        </h2>

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full hover:bg-gray-100"
          >
            ‹
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex space-x-6 overflow-x-hidden scroll-smooth"
          >
            {carouselImages.map((img, i) => {
              const product = products.find((p) =>
                p.image.toLowerCase().includes(img.toLowerCase())
              );

              return (
                <div
                  key={i}
                  className="flex-none w-64 h-64 bg-gray-100 rounded-lg shadow-md overflow-hidden relative"
                >
                  {product ? (
                    <Link
                      href={`/${product.category}/${product.id}?lang=${lang}`}
                    >
                      <Image
                        src={`/${img}`}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={`/${img}`}
                      alt={`Placeholder ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full hover:bg-gray-100"
          >
            ›
          </button>
        </div>

        {/* Return button */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block border border-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition"
          >
            ⟵ Return
          </Link>
        </div>
      </section>

      {/* === Crafted for Connoisseurs Section === */}
      <section className="w-full bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Headline */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Crafted for <br /> Connoisseurs
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Explore our complete{" "}
              <span className="font-semibold">A–Z of cigar brands</span> — from
              Cuban icons to New World discoveries.
            </p>
            <Link
              href="/category"
              className="mt-6 inline-block border border-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition"
            >
              Browse A–Z Cigars →
            </Link>
          </div>

          {/* Brand statement */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cigar Manor caters to both novices and seasoned aficionados by
              providing a vast array of cigars, including renowned Cuban and New
              World varieties.
            </p>
          </div>

          {/* Mission + Image */}
          <div className="flex flex-col gap-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to cultivate a vibrant community and challenge
              outdated perceptions about cigar culture.
            </p>
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/cigar-drink.png"
                alt="Cigar in ashtray"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
