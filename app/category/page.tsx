"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "../data/products";
import { Fahkwang } from "next/font/google";

// Load Fahkwang font
const fahkwang = Fahkwang({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function CategoryPage() {
  // Extract unique brand names from product data
  const brands = Array.from(new Set(products.map((p) => p.brand))).sort();

  return (
    <div
      className={`flex flex-col min-h-screen bg-white text-black ${fahkwang.className}`}
    >
      {/* Page Header */}
      <section className="w-full bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-12 text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Explore Our Cigars
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            From Cuban classics to New World gems, discover our full portfolio
            of cigars. Browse by brand or explore our featured collections.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="flex-1 max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar: Brands A–Z */}
        <aside className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Brands A–Z</h2>
          <ul className="space-y-2 text-gray-700">
            {brands.map((brand, i) => (
              <li key={i}>
                <Link
                  href={`#${brand.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-[#ff9800] transition-colors"
                >
                  {brand}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <div className="md:col-span-3">
          {brands.map((brand) => (
            <div
              key={brand}
              id={brand.toLowerCase().replace(/\s+/g, "-")}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold mb-6 border-b pb-2">{brand}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter((p) => p.brand === brand)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                    >
                      <Link href={`/${product.category}/${product.id}`}>
                        <div className="relative w-full h-64 bg-gray-100">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                        <div className="p-4 text-center">
                          <h4 className="font-semibold text-lg">
                            {product.name}
                          </h4>
                          <p className="text-gray-500">
                            £{Number(product.price).toFixed(2)}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Return Button */}
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
