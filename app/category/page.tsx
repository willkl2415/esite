"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

type CategoryPageProps = {
  title?: string;
  description?: string;
  category?: string; // accessories | gifts | promotions | awarded-cigars | etc.
};

export default function CategoryPage({
  title = "Explore Our Cigars",
  description = "From Cuban classics to New World gems, discover our full portfolio of cigars. Browse by brand, search by name, or explore by vitola.",
  category,
}: CategoryPageProps) {
  // === Filter products by category (or show all if no category is passed) ===
  const productsInCategory = useMemo(() => {
    if (!category) return products;
    return products.filter((p: any) => p.category === category);
  }, [category]);

  // === Build list of brands for sidebar ===
  const brands = useMemo(() => {
    const map: Record<string, string[]> = {};
    productsInCategory.forEach((p: any) => {
      if (!map[p.brand]) map[p.brand] = [];
      if (p.vitola && !map[p.brand].includes(p.vitola)) {
        map[p.brand].push(p.vitola);
      }
    });
    return Object.keys(map)
      .sort()
      .map((brand) => ({ brand, vitolas: map[brand].sort() }));
  }, [productsInCategory]);

  // === Filters & state ===
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedVitola, setSelectedVitola] = useState<string | null>(null);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(1000);
  const [applyFilters, setApplyFilters] = useState(false);
  const [sortOption, setSortOption] = useState("Default Sorting");

  // === Clear filters ===
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrand(null);
    setSelectedVitola(null);
    setPriceMin(0);
    setPriceMax(1000);
    setApplyFilters(false);
    setSortOption("Default Sorting");
    setCurrentPage(1);
  };

  // === Apply filters & sorting ===
  const filtered = useMemo(() => {
    let list = [...productsInCategory];

    if (applyFilters) {
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        list = list.filter(
          (p: any) =>
            p.name.toLowerCase().includes(q) ||
            (p.brand || "").toLowerCase().includes(q) ||
            (p.vitola || "").toLowerCase().includes(q)
        );
      }
      if (selectedBrand) {
        list = list.filter((p: any) => p.brand === selectedBrand);
      }
      if (selectedVitola) {
        list = list.filter((p: any) => p.vitola === selectedVitola);
      }
      list = list.filter((p: any) => p.price >= priceMin && p.price <= priceMax);
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
      case "Top 5 Sellers":
        list.sort((a: any, b: any) => (b.sales || 0) - (a.sales || 0));
        break;
      case "Average Rating":
        list.sort((a: any, b: any) => (b.rating || 0) - (a.rating || 0));
        break;
    }

    return list;
  }, [
    productsInCategory,
    applyFilters,
    searchTerm,
    selectedBrand,
    selectedVitola,
    priceMin,
    priceMax,
    sortOption,
  ]);

  // === Pagination ===
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.max(1, Math.ceil(filtered.length / productsPerPage));
  const pageItems = filtered.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* === Sidebar === */}
        <aside className="bg-white border border-[#000100] rounded-2xl p-6 space-y-6 shadow-sm">
          <h2 className="font-bold text-lg border-b pb-2">Filter Products</h2>

          {/* Search */}
          <input
            type="text"
            placeholder={`Search ${title}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          />

          {/* Filter buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setApplyFilters(true)}
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

          {/* Price filter */}
          <div>
            <h3 className="font-semibold mb-2">Price Range (£)</h3>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={0}
                value={priceMin}
                onChange={(e) => setPriceMin(Number(e.target.value))}
                className="w-1/2 border rounded-lg px-2 py-1 text-sm"
              />
              <span>-</span>
              <input
                type="number"
                min={0}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-1/2 border rounded-lg px-2 py-1 text-sm"
              />
            </div>
          </div>

          {/* Brand filters */}
          <div>
            <h3 className="font-semibold mb-2">Brands A–Z</h3>
            <ul className="space-y-2">
              {brands.map(({ brand, vitolas }) => (
                <li key={brand}>
                  <button
                    onClick={() =>
                      setSelectedBrand(
                        selectedBrand === brand ? null : brand
                      )
                    }
                    className="w-full flex justify-between items-center font-medium"
                  >
                    {brand}
                    <span>{selectedBrand === brand ? "−" : "+"}</span>
                  </button>
                  {selectedBrand === brand && vitolas.length > 0 && (
                    <ul className="ml-4 mt-1 space-y-1 text-sm text-gray-700">
                      {vitolas.map((v) => (
                        <li key={v}>
                          <button
                            onClick={() =>
                              setSelectedVitola(
                                selectedVitola === v ? null : v
                              )
                            }
                            className={`hover:underline ${
                              selectedVitola === v ? "font-bold" : ""
                            }`}
                          >
                            {v}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* === Main content === */}
        <main className="md:col-span-3 space-y-6">
          {/* Title + description */}
          <section className="bg-white border border-[#000100] rounded-2xl p-6 shadow-sm">
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <p className="text-gray-700">{description}</p>
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
              <option>Top 5 Sellers</option>
            </select>
          </div>

          {/* Product grid */}
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
                    <Link href={`/${category || "product"}/${p.id}`}>
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
              <p className="text-gray-600">No products found.</p>
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
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
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
