"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function CategoryPage() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  // Group products by brand
  const brands = useMemo(() => {
    const grouped: { [brand: string]: any[] } = {};
    products.forEach((p) => {
      if (!grouped[p.brand]) grouped[p.brand] = [];
      grouped[p.brand].push(p);
    });

    // Sort brands alphabetically
    return Object.keys(grouped)
      .sort((a, b) => a.localeCompare(b))
      .map((brand) => ({ brand, items: grouped[brand] }));
  }, []);

  // Products to display
  const visibleProducts = useMemo(() => {
    if (!selectedBrand) return products; // show all products by default
    return products.filter((p) => p.brand === selectedBrand);
  }, [selectedBrand]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* === Sidebar === */}
        <aside className="bg-white border border-black rounded-2xl shadow-sm p-6 h-fit">
          <h2 className="text-lg font-bold mb-4">Brands A–Z</h2>
          <ul className="space-y-2">
            {brands.map(({ brand }) => (
              <li key={brand}>
                <button
                  onClick={() =>
                    setSelectedBrand(
                      selectedBrand === brand ? null : brand
                    )
                  }
                  className={`flex justify-between items-center w-full px-3 py-2 rounded-lg border transition ${
                    selectedBrand === brand
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <span>{brand}</span>
                  <span>{selectedBrand === brand ? "–" : "+"}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* === Main content === */}
        <main className="md:col-span-3">
          <h1 className="text-4xl font-bold mb-3">Explore Our Cigars</h1>
          <p className="text-gray-700 mb-8">
            From Cuban classics to New World gems, discover our full portfolio
            of cigars. Browse by brand, search by name, or explore by vitola.
          </p>

          {/* Product grid */}
          {visibleProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProducts.map((p) => (
                <div
                  key={p.id}
                  className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white"
                >
                  <Link href={`/product/${p.id}`}>
                    <div className="relative w-full h-48">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </Link>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg">{p.name}</h3>
                    <p className="text-gray-700">£{p.price.toFixed(2)}</p>
                    <p
                      className={`text-sm font-semibold mt-2 ${
                        p.stockStatus === "In Stock"
                          ? "text-green-600"
                          : p.stockStatus === "Out of Stock"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {p.stockStatus || "Available"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No products found.</p>
          )}
        </main>
      </div>
    </div>
  );
}
