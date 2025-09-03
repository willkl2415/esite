"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { products } from "./data/products";
import { labels } from "./dictionary";

export default function HomePage() {
  const lang =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("lang") || "en"
      : "en";

  const t = labels[lang] || labels.en;

  // carousel ref
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // auto-scroll on hover
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollInterval: NodeJS.Timeout | null = null;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (carousel) {
          carousel.scrollLeft += 2; // adjust speed
          if (
            carousel.scrollLeft + carousel.clientWidth >=
            carousel.scrollWidth
          ) {
            carousel.scrollLeft = 0; // loop back to start
          }
        }
      }, 20); // adjust smoothness
    };

    const stopScroll = () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };

    carousel.addEventListener("mouseenter", startScroll);
    carousel.addEventListener("mouseleave", stopScroll);

    return () => {
      carousel.removeEventListener("mouseenter", startScroll);
      carousel.removeEventListener("mouseleave", stopScroll);
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* === Hero Section (Luxury Layout with Side-by-Side Images) === */}
      <section className="w-full bg-white">
        {/* Text block */}
        <div className="max-w-6xl mx-auto px-6 py-16 text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Where Cigars Come Alive
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Cigar Manor is your gateway to the world of cigars - discover and
            enjoy the flavours, and then make it your own.
          </p>
          <Link
            href={`/awarded-cigars?lang=${lang}`}
            className="border border-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Side-by-side images (constrained width) */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/hero-1.png"
              alt="Cigar close-up"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/hero-2.png"
              alt="Cigar lifestyle"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* === Product Carousel Placeholder === */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">
          {t.finestSelection}
        </h2>

        {/* Carousel container */}
        <div className="max-w-6xl mx-auto px-6">
          <div
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide"
          >
            {Array.from({ length: 50 }, (_, i) => (
              <div
                key={i}
                className="flex-none w-64 h-96 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-500 text-xl font-semibold"
              >
                Placeholder {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
