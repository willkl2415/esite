"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products"; // ✅ central product list

type CategoryPageProps = {
  title: string;
  description: string;
  category: string;
};

// ✅ categories that use Vitola
const cigarCategories = [
  "awarded-cigars",
  "new-world-cigars",
  "machine-made-cigars",
  "flavoured-cigars",
  "samplers",
];

export default function CategoryPage({ title, description, category }: CategoryPageProps) {
  const filtered = products.filter((p) => p.category === category);

  // ✅ build brand list only from products in this category
  const brandsInCategory = Array.from(new Set(filtered.map((p) => p.brand))).filter(Boolean);

  // ✅ Vitola list (if data has it)
  const vitolasInCategory = Array.from(new Set(filtered.map((p) => p.vitola))).filter(Boolean);

  // ✅ local search state
  const [searchTerm, setSearchTerm] = useState("");

  const displayedProducts = filtered.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#ff9800] p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="bg-white shadow-lg p-6 rounded-2xl space-y-6">
          <h2 className="font-bold text-lg border-b pb-2">Filter Products</h2>

          {/* Search box */}
          <input
            type="text"
            placeholder={`Search ${title}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg mb-4"
          />

          {/* Filter / Clear buttons */}
          <div className="flex space-x-4">
            <button className="bg-[#000100] text-[#ff9800] font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-[#000100] transition">
              FILTER
            </button>
            <button
              onClick={() => setSearchTerm("")}
              className="border border-[#000100] text-[#000100] px-4 py-2 rounded-full hover:bg-[#000100] hover:text-white transition"
            >
              CLEAR
            </button>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="font-semibold mb-2">Price</h3>
            <input type="range" min="10" max="100" className="w-full accent-[#CFAE70]" />
            <div className="flex justify-between text-sm mt-1">
              <span>£10</span>
              <span>£100</span>
            </div>
          </div>

          {/* Brands Filter */}
          {brandsInCategory.length > 0 && (
            <details className="border rounded-lg">
              <summary className="cursor-pointer px-3 py-2 font-medium">Brands</summary>
              <div className="px-3 py-2 text-sm text-gray-600 space-y-1">
                {brandsInCategory.map((brand) => (
                  <label key={brand} className="block">
                    <input type="checkbox" className="mr-2" /> {brand}
                  </label>
                ))}
              </div>
            </details>
          )}

          {/* Vitola Filter (only for cigar categories) */}
          {cigarCategories.includes(category) && vitolasInCategory.length > 0 && (
            <details className="border rounded-lg">
              <summary className="cursor-pointer px-3 py-2 font-medium">Vitola</summary>
              <div className="px-3 py-2 text-sm text-gray-600 space-y-1">
                {vitolasInCategory.map((vitola) => (
                  <label key={vitola} className="block">
                    <input type="checkbox" className="mr-2" /> {vitola}
                  </label>
                ))}
              </div>
            </details>
          )}
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3 space-y-6">
          {/* Intro Section */}
          <section className="bg-white shadow-lg p-6 rounded-2xl">
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <p className="text-gray-700">{description}</p>
          </section>

          {/* Sorting */}
          <div className="flex justify-end">
            <select className="border rounded-lg px-3 py-2 shadow-sm">
              <option>Default Sorting</option>
              <option>Alphabetical</option>
              <option>Average Rating</option>
              <option>Newest Additions</option>
              <option>Price High to Low</option>
              <option>Price Low to High</option>
              <option>Top 5 Sellers</option>
            </select>
          </div>

          {/* Product Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <div
                  key={product.id}
                  className="relative bg-[#3E2723] border border-[#CFAE70] p-6 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition transform duration-300"
                >
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#CFAE70] text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {product.badge}
                    </span>
                  )}

                  <div className="bg-white p-4 rounded-lg shadow-inner">
                    <Link href={`/${category}/${product.id}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={160}
                        height={160}
                        className="mx-auto h-40 w-auto object-contain"
                      />
                    </Link>
                  </div>

                  <h3 className="mt-4 text-center text-[#FFD700] font-serif text-lg font-bold tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-center text-sm text-white">
                    £{Number(product.price).toFixed(2)}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-lg text-white">No products found in {title}.</p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
