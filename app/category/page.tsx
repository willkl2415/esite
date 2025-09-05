"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "../data/products";

type Product = {
  id: string;
  name: string;
  brand?: string;
  category?: string;
  vitola?: string;
  price?: number;
  status?: "In Stock" | "Out of Stock" | "Pre-order";
  image: string;
};

export default function CategoryPage() {
  const [openBrand, setOpenBrand] = useState<string | null>(null);

  // Collect all cigar brands (exclude accessories/gifts/promotions)
  const brands = useMemo(() => {
    const brandMap = new Map<string, Product[]>();
    products.forEach((p: Product) => {
      if (
        p.category !== "accessories" &&
        p.category !== "gifts" &&
        p.category !== "promotions"
      ) {
        const brand = p.brand || "Unknown";
        if (!brandMap.has(brand)) brandMap.set(brand, []);
        brandMap.get(brand)!.push(p);
      }
    });
    // Sort products under each brand
    for (const [b, arr] of brandMap) {
      arr.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
      );
    }
    // Sort brands alphabetically
    return Array.from(brandMap.entries()).sort(([a], [b]) =>
      a.localeCompare(b, undefined, { sensitivity: "base" })
    );
  }, []);

  const currentProducts = useMemo(() => {
    if (!openBrand) return [];
    const brand = brands.find(([b]) => b === openBrand);
    return brand ? brand[1] : [];
  }, [openBrand, brands]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <section className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our Cigars
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            From Cuban classics to New World gems, discover our full portfolio
            of cigars. Browse by brand, search by name, or explore by vitola.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="bg-white border border-black rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-4">Brands A–Z</h2>
            <ul className="space-y-2">
              {brands.map(([brand]) => (
                <li key={brand}>
                  <button
                    onClick={() =>
                      setOpenBrand(openBrand === brand ? null : brand)
                    }
                    className="w-full flex justify-between items-center text-left font-medium border-b py-2 hover:text-black"
                  >
                    <span>{brand}</span>
                    <span>{openBrand === brand ? "−" : "+"}</span>
                  </button>
                  {openBrand === brand && (
                    <ul className="pl-4 mt-2 space-y-1 text-sm text-gray-700">
                      {brands
                        .find(([b]) => b === brand)?.[1]
                        .map((p) => (
                          <li key={p.id} className="list-disc ml-4">
                            {p.vitola ? (
                              <span className="font-normal">{p.vitola}</span>
                            ) : (
                              <span className="font-normal">{p.name}</span>
                            )}
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main panel */}
          <main className="md:col-span-3">
            {openBrand ? (
              <>
                <h2 className="text-2xl font-bold mb-6">{openBrand}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProducts.map((p) => (
                    <div
                      key={p.id}
                      className="bg-white border border-black rounded-2xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
                    >
                      <div className="relative w-full h-48 mb-4">
                        <Link href={`/product/${p.id}`}>
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            className="object-contain rounded-lg"
                          />
                        </Link>
                      </div>
                      <h3 className="text-lg font-semibold text-center mb-2">
                        {p.name}
                      </h3>
                      <p className="text-center text-sm text-gray-600 mb-1">
                        £{p.price?.toFixed(2)}
                      </p>
                      <p className="text-center text-xs font-medium">
                        {p.status === "Out of Stock" && (
                          <span className="text-red-600">Out of Stock</span>
                        )}
                        {p.status === "Pre-order" && (
                          <span className="text-yellow-600">Pre-order</span>
                        )}
                        {(!p.status || p.status === "In Stock") && (
                          <span className="text-green-600">In Stock</span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-gray-600">
                Select a brand on the left to explore its cigars.
              </p>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
