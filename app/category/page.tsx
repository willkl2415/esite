"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

/** Optional shape – all fields are guarded below so TS won't choke if missing */
type Product = {
  id: string;
  name: string;
  brand: string;
  vitola?: string;
  price: number;
  image: string;
  category: string; // e.g. "product" | "accessories" | "gifts" | "promotions" | ...
  badge?: string;
  status?: string;       // sometimes datasets use "status"
  stockStatus?: string;  // sometimes datasets use "stockStatus"
  dateAdded?: string;
  rating?: number;
  sales?: number;
};

type CategoryPageProps = {
  title?: string;
  description?: string;
  /** if provided, only show products for this category (e.g. "accessories") */
  category?: string;
};

export default function CategoryPage({
  title = "Explore Our Cigars",
  description = "From Cuban classics to New World gems, discover our full portfolio of cigars. Browse by brand, search by name, or explore by vitola.",
  category,
}: CategoryPageProps) {
  /** 1) Category scope (or all products if none specified) */
  const productsInScope = useMemo<Product[]>(() => {
    const all = products as Product[];
    return category ? all.filter((p) => p.category === category) : all;
  }, [category]);

  /** 2) Build Brands → Vitolas map (unique, A–Z) */
  const brands = useMemo(() => {
    const map = new Map<string, Set<string>>();
    productsInScope.forEach((p) => {
      if (!map.has(p.brand)) map.set(p.brand, new Set());
      if (p.vitola) map.get(p.brand)!.add(p.vitola);
    });
    return Array.from(map.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([brand, vitolas]) => ({
        brand,
        vitolas: Array.from(vitolas).sort(),
      }));
  }, [productsInScope]);

  /** 3) UI state */
  const [openBrand, setOpenBrand] = useState<string | null>(null);
  const [selectedVitola, setSelectedVitola] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(1000);
  const [applyFilters, setApplyFilters] = useState(false);
  const [sortOption, setSortOption] = useState("Default Sorting");

  /** 4) Filtering & sorting
   *    IMPORTANT: Brand/Vitola filters apply IMMEDIATELY (no button).
   *    The search/price filters only apply when FILTER is pressed.
   */
  const filtered = useMemo(() => {
    let list = [...productsInScope];

    // Brand / vitola filter (always-on, accordion-driven)
    if (openBrand) list = list.filter((p) => p.brand === openBrand);
    if (selectedVitola) list = list.filter((p) => p.vitola === selectedVitola);

    // Search + price range only when the user clicks FILTER
    if (applyFilters) {
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        list = list.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            (p.vitola || "").toLowerCase().includes(q)
        );
      }
      list = list.filter((p) => p.price >= priceMin && p.price <= priceMax);
    }

    // Sorting
    switch (sortOption) {
      case "Alphabetical":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Price Low to High":
        list.sort((a, b) => a.price - b.price);
        break;
      case "Price High to Low":
        list.sort((a, b) => b.price - a.price);
        break;
      case "Newest Additions":
        list.sort(
          (a, b) =>
            new Date(b.dateAdded || 0).getTime() -
            new Date(a.dateAdded || 0).getTime()
        );
        break;
      case "Top 5 Sellers":
        list.sort((a, b) => (b.sales || 0) - (a.sales || 0));
        break;
      case "Average Rating":
        list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
    }

    return list;
  }, [
    productsInScope,
    openBrand,
    selectedVitola,
    applyFilters,
    searchTerm,
    priceMin,
    priceMax,
    sortOption,
  ]);

  /** 5) Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  /** 6) Helpers */
  const clearFilters = () => {
    setSearchTerm("");
    setPriceMin(0);
    setPriceMax(1000);
    setApplyFilters(false);
    setSortOption("Default Sorting");
    // Keep accordion context but clear vitola selection
    setSelectedVitola(null);
    setCurrentPage(1);
  };

  const stock = (p: Product) => p.stockStatus || p.status || ""; // safe badge

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* ===== Sidebar ===== */}
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

          {/* Filter/Clear */}
          <div className="flex gap-3">
            <button
              onClick={() => {
                setApplyFilters(true);
                setCurrentPage(1);
              }}
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

          {/* Brands A–Z – true accordion (traceback behavior) */}
          <div>
            <h3 className="font-semibold mb-2">Brands A–Z</h3>
            <ul className="space-y-2">
              {brands.map(({ brand, vitolas }) => {
                const isOpen = openBrand === brand;
                return (
                  <li key={brand} className="rounded-lg">
                    <details
                      open={isOpen}
                      onToggle={(e) => {
                        const element = e.currentTarget as HTMLDetailsElement;
                        // Only toggle when this details was clicked
                        if (element.open) {
                          setOpenBrand(brand);
                          setSelectedVitola(null);
                        } else if (openBrand === brand) {
                          setOpenBrand(null);
                          setSelectedVitola(null);
                        }
                        setCurrentPage(1);
                      }}
                      className="group"
                    >
                      <summary className="cursor-pointer flex items-center justify-between py-2 px-2 rounded-lg hover:bg-gray-50 font-medium">
                        <span>{brand}</span>
                        <span className="ml-3 select-none rounded-full border px-2 leading-none">
                          {isOpen ? "−" : "+"}
                        </span>
                      </summary>

                      {vitolas.length > 0 && (
                        <ul className="ml-4 mt-1 mb-2 space-y-1 text-sm text-gray-700">
                          {vitolas.map((v) => {
                            const active = selectedVitola === v;
                            return (
                              <li key={v}>
                                <button
                                  onClick={() => {
                                    setSelectedVitola(active ? null : v);
                                    setCurrentPage(1);
                                  }}
                                  className={`hover:underline ${
                                    active ? "font-bold" : ""
                                  }`}
                                >
                                  {v}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </details>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* ===== Main ===== */}
        <main className="md:col-span-3 space-y-6">
          {/* Title */}
          <section className="bg-white border border-[#000100] rounded-2xl p-6 shadow-sm">
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <p className="text-gray-700">{description}</p>
          </section>

          {/* Sorting */}
          <div className="flex justify-end">
            <select
              value={sortOption}
              onChange={(e) => {
                setSortOption(e.target.value);
                setCurrentPage(1);
              }}
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
              pageItems.map((p) => (
                <div
                  key={p.id}
                  className="relative bg-white border border-[#000100] rounded-2xl overflow-hidden p-4 shadow-sm hover:shadow-lg transition"
                >
                  {/* Badge */}
                  {p.badge && (
                    <span className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {p.badge}
                    </span>
                  )}

                  {/* Image */}
                  <div className="bg-white p-4 rounded-lg shadow-inner">
                    <Link href={`/${p.category}/${p.id}`}>
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={180}
                        height={180}
                        className="mx-auto h-40 w-auto object-contain"
                      />
                    </Link>
                  </div>

                  {/* Name & Price */}
                  <h3 className="mt-4 text-center text-[#000100] font-serif text-lg font-bold tracking-wide">
                    {p.name}
                  </h3>
                  <p className="text-center text-sm text-gray-700">
                    £{Number(p.price).toFixed(2)}
                  </p>

                  {/* Stock (supports either stockStatus or status) */}
                  {stock(p) && (
                    <p
                      className={`text-center text-sm font-semibold mt-1 ${
                        stock(p) === "In Stock"
                          ? "text-green-600"
                          : stock(p) === "Out of Stock"
                          ? "text-red-600"
                          : "text-blue-600"
                      }`}
                    >
                      {stock(p)}
                    </p>
                  )}
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
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="border border-black text-black px-4 py-2 rounded-full disabled:opacity-50 hover:bg-black hover:text-white transition"
              >
                Prev
              </button>
              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
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
