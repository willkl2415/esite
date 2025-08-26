"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "./data/products";

export default function HomePage() {
  const featured = products.filter((p) => p.featured);

  return (
    <div className="flex flex-col min-h-screen bg-[#ff9800] text-center">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center flex-1 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Cigar Manor
        </h1>
        <p className="text-xl md:text-2xl text-white italic mb-10">
          &quot;Where Connoisseurs of Cool Meet Pleasure&quot;
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6">
          <Link
            href="/awarded-cigars"
            className="bg-black hover:bg-white hover:text-black text-[#ff9800] font-semibold px-8 py-3 rounded-full shadow-md transition"
          >
            Shop Now
          </Link>
          <Link
            href="/about-us"
            className="border border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold mb-10">Our Finest Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {featured.length > 0 ? (
            featured.map((product) => (
              <div key={product.id} className="text-center">
                <Link href={`/awarded-cigars/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="mx-auto rounded-lg shadow-lg object-contain bg-white hover:scale-105 transition"
                  />
                </Link>
                <p className="mt-4 text-lg font-medium">{product.name}</p>
                <p className="text-sm text-gray-600">
                  £{Number(product.price).toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <p>No featured products available.</p>
          )}
        </div>
      </section>
    </div>
  );
}
