"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";
import { cigarBrands } from "../data/products/cigarBrands";
import { tobaccoBrands } from "../data/products/tobaccoBrands";

// --- Types that match your dataset ---
type Product = {
  id: string;
  name: string;
  brand: string;
  vitola?: string;   // cigars
  blend?: string;    // tobacco
  price: number | string;
  image: string;
  category: string;
  badge?: string;
  status?: string;
  stockStatus?: string;
};

// Normalizer to handle accents, case, spacing
const normalize = (str: string) =>
  str
    ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim()
    : "";

export default function CategoryPage() {
  // Sidebar accordion state
  const [openBrand, setOpenBrand] = useState<string | null>(null);
  const [selectedSub, setSelectedSub] = useState<string | null>(null);

  // ✅ Detect category from products (cigars vs tobacco)
  // We assume this page is for ALL products, but filtering is separate
  const allProducts = useMemo(() => products as Product[], []);

  // Figure out which category we’re in based on first product
  const currentCategory =
    allProducts.find((p) => p.category === "hand-rolling") !== undefined
      ? "hand-rolling"
      : "cigars";

  // Select correct brand map
  const brandMap =
    currentCategory === "hand-rolling" ? tobaccoBrands : cigarBrands;

  // Apply brand + vitola/blend filtering
  const filtered = useMemo(() => {
    let list = [...allProducts];
    if (currentCategory === "cigars") {
      list = list.filter(
        (p) =>
          ["awarded-cigars", "cigars", "product"].includes(p.category) // cigars only
      );
    } else {
      list = list.filter((p) => normalize(p.category) === "hand-rolling"); // tobacco only
    }

    if (openBrand) {
      list = list.filter((p) => normalize(p.brand) === normalize(openBrand));

      if (selectedSub) {
        if (currentCategory === "hand-rolling") {
          list = list.filter(
            (p) =>
              p.blend && normalize(p.blend) === normalize(selectedSub)
          );
        } else {
          list = list.filter(
            (p) =>
              p.vitola && normalize(p.vitola) === normalize(selectedSub)
          );
        }
      }
    }

    return list;
  }, [allProducts, openBrand, selectedSub, currentCategory]);

  // Stock helpers
  const stockText = (p: Product) => p.stockStatus || p.status || "";
  const stockClass = (txt: string) =>
    txt === "In Stock"
      ? "text-green-600"
      : txt === "Out of Stock"
      ? "text-red-600"
      : "text-blue-600";

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
          {currentCategory === "hand-rolling"
            ? "Explore Our Hand Rolling Tobacco"
            : "Explore Our Cigars"}
        </h1>
        <p className="text-gray-700 text-base md:text-lg">
          {currentCategory === "hand-rolling"
            ? "From Auld Kendal to Pueblo, explore our full collection of premium hand rolling tobaccos."
            : "From Cuban classics to New World gems, discover our full portfolio of cigars. Browse by brand, search by name, or explore by vitola."}
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar — Brands A–Z */}
        <aside className="md:col-span-1">
          <h2 className="text-lg font-semibold mb-3">Brands A–Z</h2>
          <ul className="space-y-2">
            {brandMap.map(({ brand, vitolas, blends }) => {
              const isOpen = openBrand === brand;
              const subs =
                currentCategory === "hand-rolling"
                  ? blends || []
                  : vitolas || [];
              return (
                <li key={brand} className="border-b">
                  <button
                    onClick={() => {
                      if (isOpen) {
                        setOpenBrand(null);
                        setSelectedSub(null);
                      } else {
                        setOpenBrand(brand);
                        setSelectedSub(null);
                      }
                    }}
                    className="w-full flex items-center justify-between py-2 text-left font-medium hover:text-black/80"
                  >
                    <span>{brand}</span>
                    <span className="text-xl leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && subs?.length > 0 && (
                    <ul className="ml-4 mb-3 space-y-1 list-disc text-sm text-gray-700">
                      {subs.map((s: string) => (
                        <li key={s}>
                          <button
                            onClick={() =>
                              setSelectedSub((cur) =>
                                cur === s ? null : s
                              )
                            }
                            className={`hover:underline ${
                              selectedSub === s
                                ? "font-semibold text-black"
                                : ""
                            }`}
                          >
                            {s}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Main grid */}
        <main className="md:col-span-3 space-y-6">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length > 0 ? (
              filtered.map((p) => (
                <div
                  key={p.id}
                  className="relative bg-white border border-[#000100] rounded-2xl overflow-hidden p-4 shadow-sm hover:shadow-lg transition"
                >
                  {p.badge && (
                    <span className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {p.badge}
                    </span>
                  )}

                  <div className="bg-white p-4 rounded-lg shadow-inner">
                    <Link href={`/product/${p.id}`}>
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={220}
                        height={220}
                        className="mx-auto h-44 w-auto object-contain"
                      />
                    </Link>
                  </div>

                  <h3 className="mt-3 text-center text-[#000100] font-serif text-lg font-bold tracking-wide">
                    {p.name}
                  </h3>
                  <p className="text-center text-sm text-gray-700">
                    {typeof p.price === "number"
                      ? `£${p.price.toFixed(2)}`
                      : p.price}
                  </p>

                  {stockText(p) && (
                    <p
                      className={`text-center text-sm font-semibold mt-1 ${stockClass(
                        stockText(p)
                      )}`}
                    >
                      {stockText(p)}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-600">No products found.</p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
