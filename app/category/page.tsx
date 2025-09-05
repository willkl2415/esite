"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

type CategoryPageProps = {
  title: string;
  description: string;
  category: string; // accessories | gifts | promotions | etc.
};

export default function CategoryPage({ title, description, category }: CategoryPageProps) {
  // Products in this category
  const productsInCategory = useMemo(
    () => products.filter((p: any) => p.category === category),
    [category]
  );

  // Facets
  const brands = useMemo(() => {
    const set = new Set<string>();
    productsInCategory.forEach((p: any) => p.brand && set.add(p.brand));
    return Array.from(set).sort();
  }, [productsInCategory]);

  const vitolas = useMemo(() => {
    const set = new Set<string>();
    productsInCategory.forEach((p: any) => p.vitola && set.add(p.vitola));
    return Array.from(set).sort();
  }, [productsInCategory]);

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedVitolas, setSelectedVitolas] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(1000);
  const [applyFilters, setApplyFilters] = useState(false);
  const [sortOption, setSortOption] = useState("Default Sorting");

  const brandDetailsRef = useRef<HTMLDetailsElement>(null);
  const vitolaDetailsRef = useRef<HTMLDetailsElement>(null);

  const toggleBrand = (b: string) => {
    setSelectedBrands((prev) => (prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]));
    if (brandDetailsRef.current) brandDetailsRef.current.open = false;
  };

  const toggleVitola = (v: string) => {
    setSelectedVitolas((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
    if (vitolaDetailsRef.current) vitolaDetailsRef.current.open = false;
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrands([]);
    setSelectedVitolas([]);
    setPriceMin(0);
    setPriceMax(1000);
    setApplyFilters(false);
    setSortOption("Default Sorting");
    setCurrentPage(1);
  };

  // Apply filters & sorting
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
      if (selectedBrands.length) list = list.filter((p: any) => selectedBrands.includes(p.brand));
      if (selectedVitolas.length) list = list.filter((p: any) => selectedVitolas.includes(p.vitola));
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
    selectedBrands,
    selectedVitolas,
    priceMin,
    priceMax,
    sortOption,
  ]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.max(1, Math.ceil(filtered.length / productsPerPage));
  const pageItems = filtered.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="bg-white border border-[#000100] rounded-2xl p-6 space-y-6 shadow-sm">
          <h2 className="font-bold text-lg border-b pb-2">Filter Products</h2>

          <input
            type="text"
            placeholder={`Search ${title}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          />

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

          {/* Price */}
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

          {/* Brands */}
          {brands.length > 0 && (
            <details ref={brandDetailsRef} className="border rounded-lg">
              <summary className="cursor-pointer px-3 py-2 font-medium">Brands</summary>
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

          {/* Vitolas */}
          {vitolas.length > 0 && (
            <details ref={vitolaDetailsRef} className="border rounded-lg">
              <summary className="cursor-pointer px-3 py-2 font-medium">Vitola</summary>
              <div className="px-3 py-2 text-sm text-gray-600 space-y-1">
                {vitolas.map((v) => (
                  <label key={v} className="block">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedVitolas.includes(v)}
                      onChange={() => toggleVitola(v)}
                    />
                    {v}
                  </label>
                ))}
              </div>
            </details>
          )}
        </aside>

        {/* Main */}
        <main className="md:col-span-3 space-y-6">
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
                    <Link href={`/${category}/${p.id}`}>
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
              <span className="text-sm">Page {currentPage} of {totalPages}</span>
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
