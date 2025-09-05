"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { products } from "../data/products";

type Prod = {
  id: string;
  name: string;
  brand?: string;
  category?: string;
  price?: number;
};

const NON_CIGAR_CATEGORIES = new Set(["accessories", "gifts", "promotions"]);

function slugifyLetter(ch: string) {
  return `letter-${ch.toUpperCase()}`;
}

export default function CategoryPage() {
  // Keep only cigar products (exclude accessories/gifts/promotions)
  const cigars: Prod[] = useMemo(
    () =>
      products.filter(
        (p: any) => p.category && !NON_CIGAR_CATEGORIES.has(p.category)
      ),
    []
  );

  // Build Brand -> Products map
  const brandMap = useMemo(() => {
    const map = new Map<string, Prod[]>();
    cigars.forEach((p) => {
      const brand = (p.brand || "Unknown").trim();
      if (!map.has(brand)) map.set(brand, []);
      map.get(brand)!.push(p);
    });
    // Sort products within each brand
    for (const [_b, arr] of map) {
      arr.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
    }
    return map;
  }, [cigars]);

  // Create Letter -> [Brand] map (A–Z, # for symbols/numbers)
  const letterMap = useMemo(() => {
    const lmap = new Map<string, string[]>();
    const add = (L: string, brand: string) => {
      if (!lmap.has(L)) lmap.set(L, []);
      lmap.get(L)!.push(brand);
    };

    for (const brand of Array.from(brandMap.keys())) {
      const first = brand.charAt(0).toUpperCase();
      const letter = first >= "A" && first <= "Z" ? first : "#";
      add(letter, brand);
    }

    // Sort brands under each letter A–Z
    for (const [L, arr] of lmap) {
      arr.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
    }

    return lmap;
  }, [brandMap]);

  const letters = useMemo(() => {
    const AtoZ = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const present = AtoZ.filter((L) => letterMap.has(L));
    if (letterMap.has("#")) present.push("#");
    return present;
  }, [letterMap]);

  // Search by brand or product
  const [q, setQ] = useState("");

  const filteredLetterMap = useMemo(() => {
    if (!q.trim()) return letterMap;
    const query = q.toLowerCase();
    const lmap = new Map<string, string[]>();

    for (const [brand, prods] of brandMap) {
      const brandMatch = brand.toLowerCase().includes(query);
      const productMatch = prods.some((p) => p.name.toLowerCase().includes(query));
      if (brandMatch || productMatch) {
        const first = brand.charAt(0).toUpperCase();
        const L = first >= "A" && first <= "Z" ? first : "#";
        if (!lmap.has(L)) lmap.set(L, []);
        lmap.get(L)!.push(brand);
      }
    }
    // Sort per letter
    for (const [L, arr] of lmap) {
      arr.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
    }
    return lmap;
  }, [q, brandMap, letterMap]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <section className="bg-white border border-[#000100] rounded-2xl p-6 shadow-sm mb-6">
          <h1 className="text-3xl font-bold mb-2">Cigars A–Z</h1>
          <p className="text-gray-700">
            Explore our complete A–Z of cigar brands — Cuban icons to New World discoveries.
          </p>
        </section>

        {/* Top controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          {/* Jump bar */}
          <div className="flex flex-wrap gap-2">
            {letters.map((L) => (
              <a
                key={L}
                href={`#${slugifyLetter(L)}`}
                className="border border-black px-3 py-1 rounded-full text-sm hover:bg-black hover:text-white transition"
              >
                {L}
              </a>
            ))}
          </div>

          {/* Search */}
          <div className="flex gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search brands or cigars…"
              className="border rounded-lg px-3 py-2 w-72"
            />
            <button
              onClick={() => setQ("")}
              className="border border-black px-3 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              CLEAR
            </button>
          </div>
        </div>

        {/* A–Z Accordion by Letter */}
        <div className="space-y-4">
          {letters
            .filter((L) => filteredLetterMap.has(L))
            .map((L) => (
              <section key={L} id={slugifyLetter(L)} className="border border-[#000100] rounded-2xl">
                <details open className="group">
                  <summary className="cursor-pointer select-none list-none px-5 py-4 flex items-center justify-between">
                    <span className="text-xl font-bold">{L}</span>
                    <span className="text-sm text-gray-600 group-open:hidden">Show</span>
                    <span className="text-sm text-gray-600 hidden group-open:inline">Hide</span>
                  </summary>

                  {/* Brands under this letter */}
                  <div className="px-5 pb-5 space-y-6">
                    {filteredLetterMap
                      .get(L)!
                      .map((brand) => (
                        <div key={brand} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                          <h3 className="text-lg font-semibold mb-3">{brand}</h3>

                          {/* Brand’s cigars */}
                          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {brandMap.get(brand)!.map((p) => (
                              <li key={p.id} className="flex items-center justify-between gap-3">
                                <Link
                                  href={`/product/${p.id}`}
                                  className="hover:underline"
                                >
                                  {p.name}
                                </Link>
                                {typeof p.price === "number" && (
                                  <span className="text-sm text-gray-700">
                                    £{Number(p.price).toFixed(2)}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                </details>
              </section>
            ))}
        </div>

        {/* Back to top */}
        <div className="text-center mt-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-block border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
          >
            Back to top
          </a>
        </div>
      </div>
    </div>
  );
}
