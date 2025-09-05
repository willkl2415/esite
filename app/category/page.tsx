"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function CategoryPage() {
  // Only cigars (exclude accessories, gifts, promotions)
  const cigars = useMemo(
    () =>
      products.filter(
        (p: any) =>
          p.category &&
          !["accessories", "gifts", "promotions"].includes(p.category)
      ),
    []
  );

  // Unique brands for filtering
  const brands = useMemo(() => {
    const set = new Set<string>();
    cigars.forEach((p: any) => p.brand && set.add(p.brand));
    return Array.from(set).sort();
  }, [cigars]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("Default Sorting");

  const toggleBrand = (b: string) => {
    setSelectedBrands((prev) =>
      prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrands([]);
    setSortOption("Default Sorting");
    setCurrentPage(1);
  };

  // Filter + sort
  const filtered = useMemo(() => {
    let list = [...cigars];
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (p: any) =>
          p.name.toLowerCase().includes(q) ||
          (p.brand || "").toLowerCase().includes(q)
      );
    }
    if (selectedBrands.length) {
      list = list.filter((p: any) => selectedBrands.includes(p.brand));
    }

    switch (sortOption) {
      case "Alphabetical":
        list.sort((a: any, b: any) => a.name.localeCompare(b.name));
        break;
      case "Price Low to High":
        list.sort((a: any, b: any) => a.price - b.price);
        break;
      case "Price High to Low":
        list.sort((a: any, b: any) => b.price - a.price);
        break;
      case "Newest Additions":
        list.sort(
          (a: any, b: any) =>
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
        break;
      case "Average Rating":
        list.sort((a: any, b: any) => (b.rating || 0) - (a.rating || 0));
        break;
    }
    return list;
  }, [cigars, searchTerm, selectedBrands, sortOption]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="bg-white border border-[#000100] rounded-2xl p-6 space-y-6 shadow-sm">
          <h2 className="font-bold text-lg border-b pb-2">Filter Cigars</h2>

          <input
            type="text"
            placeholder="Search cigars..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          />

          <div className="flex gap-3">
            <button
              onClick={() => {}}
              className="border border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              FILTER
            </button>
            <button
              onClick={clearFilters}
              className="border border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              CLEAR
            </button>
          </div>

          {/* Brands */}
          {brands.length > 0 && (
            <details className="border rounded-lg">
              <summary className="cursor-pointer px-3 py-2 font-medium">
                Brands
              </summary>
              <div className="px-3 py-2 text-sm text-gray-600 space-y-1">
                {brands.map((b) => (
                  <label key={b} className="block">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedBrands.includes(b)}
                      onChange={() => toggleBrand(b)}
                    />
                    {b}
                  </label>
                ))}
              </div>
            </details>
          )}
        </aside>

        {/* Main */}
        <main className="md:col-span-3 space-y-6">
          <section className="bg-white border border-[#000100] rounded-2xl p-6 shadow-sm">
            <h1 className="text-2xl font-bold mb-2">Cigars A–Z</h1>
            <p className="text-gray-700">
              Explore our complete A–Z of cigar brands — Cuban icons to New
              World discoveries.
            </p>
          </section>

          {/* Sorting */}
          <div className="flex justify-end">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border rounded-lg px-3 py-2 shadow-sm"
            >
              <option>Default Sorting</option>
              <option>Alphabetical</option>
              <option>Average Rating</option>
              <option>Newest Additions</option>
              <option>Price High to Low</option>
              <option>Price Low to High</option>
            </select>
          </div>

          {/* Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageItems.length > 0 ? (
              pageItems.map((p: any) => (
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
                        width={160}
                        height={160}
                        className="mx-auto h-40 w-auto object-contain"
                      />
                    </Link>
                  </div>

                  <h3 className="mt-4 text-center text-[#000100] font-serif text-lg font-bold tracking-wide">
                    {p.name}
                  </h3>
                  <p className="text-center text-sm text-gray-700">
                    £{Number(p.price).toFixed(2)}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No cigars found.</p>
            )}
          </section>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="border border-black text-black px-4 py-2 rounded-full disabled:opacity-50 hover:bg-black hover:text-white transition"
              >
                Prev
              </button>
              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="border border-black text-black px-4 py-2 rounded-full disabled:opacity-50 hover:bg-black hover:text-white transition"
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
