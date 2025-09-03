"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "./data/products";
import { labels } from "./dictionary";

export default function HomePage() {
  const lang =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("lang") || "en"
      : "en";

  const t = labels[lang] || labels.en;

  const featured = products.filter((p) => p.featured).slice(0, 3);

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
            Embark on a flavorful journey of discovery with Cigar Manor, a
            premier platform designed for cigar enthusiasts of all levels.
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

      {/* === Product Highlights (unchanged for now) === */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">
          {t.finestSelection}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {featured.length > 0 ? (
            featured.map((product) => (
              <div key={product.id} className="text-center">
                <Link href={`/${product.category}/${product.id}?lang=${lang}`}>
                  <div className="w-full h-[500px] flex items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={600}
                      className="object-contain"
                    />
                  </div>
                </Link>
                <p className="mt-4 text-lg font-medium">{product.name}</p>
                <p className="text-sm text-gray-600">
                  £{Number(product.price).toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </section>
    </div>
  );
}
