"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

type CategoryPageProps = {
  title: string;
  description: string;
  category: string;
};

const cigarCategories = [
  "awarded-cigars",
  "new-world-cigars",
  "machine-made-cigars",
  "flavoured-cigars",
  "samplers",
];

export default function CategoryPage({ title, description, category }: CategoryPageProps) {
  const filtered = products.filter((p) => p.category === category);

  const brandsInCategory = Array.from(
    new Set(filtered.map((p: any) => p.brand || null))
  ).filter(Boolean);

  const vitolasInCategory =
    cigarCategories.includes(category)
      ? Array.from(new Set(filtered.map((p: any) => p.vitola || null))).filter(Boolean)
      : [];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedVitolas, setSelectedVitolas] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(1000);
  const [applyFilters, setApplyFilters] = useState(false);
  const [sortOption, setSortOption] = useState("Default Sorting");

  // ✅ Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const brandDetailsRef = useRef<HTMLDetailsElement>(null);
  const vitolaDetailsRef = useRef<HTMLDetailsElement>(null);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
    setApplyFilters(true); // auto-apply
    setCurrentPage(1);     // reset to page 1
    if (brandDetailsRef.current) brandDetailsRef.current.open = false;
  };

  const toggleVitola = (vitola: string) => {
    setSelectedVitolas((prev) =>
      prev.includes(vitola) ? prev.filter((v) => v !== vitola) : [...prev, vitola]
    );
    setApplyFilters(true); // auto-apply
    setCurrentPage(1);     // reset to page 1
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

  // ✅ Apply filters (extended search: name + brand + vitola)
  let displayedProducts = filtered.filter((p: any) => {
    const term = searchTerm.toLowerCase();
    if (!applyFilters) {
      return (
        p.name.toLowerCase().includes(term) ||
        (p.brand && p.brand.toLowerCase().includes(term)) ||
        (p.vitola && p.vitola.toLowerCase().includes(term))
      );
    }

    const matchesSearch =
      p.name.toLowerCase().includes(term) ||
      (p.brand && p.brand.toLowerCase().includes(term)) ||
      (p.vitola && p.vitola.toLowerCase().includes(term));

    const matchesBrand =
      selectedBrands.length === 0 || (p.brand && selectedBrands.includes(p.brand));
    const matchesVitola =
      selectedVitolas.length === 0 || (p.vitola && selectedVitolas.includes(p.vitola));
    const matchesPrice = p.price >= priceMin && p.price <= priceMax;

    return matchesSearch && matchesBrand && matchesVitola && matchesPrice;
  });

  // ✅ Apply sorting
  displayedProducts = [...displayedProducts].sort((a: any, b: any) => {
    switch (sortOption) {
      case "Alphabetical":
        return a.name.localeCompare(b.name);
      case "Price Low to High":
        return a.price - b.price;
      case "Price High to Low":
        return b.price - a.price;
      case "Newest Additions":
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      case "Top 5 Sellers":
        return (b.sales || 0) - (a.sales || 0);
      case "Average Rating":
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  // ✅ Pagination logic
  const totalPages = Math.ceil(displayedProducts.length / productsPerPage);
  const paginatedProducts = displayedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="bg-white border rounded-lg p-6 space-y-6">
          <h2 className="font-bold text-lg border-b pb-2">Filter Products</h2>

          <input
            type="text"
            placeholder={`Search ${title}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg mb-4"
          />

          <div className="flex space-x-4">
            <button
              onClick={() => setApplyFilters(true)}
              className="primary w-full"
            >
              FILTER
            </button>
            <button
              onClick={clearFilters}
              className="secondary w-full"
            >
              CLEAR
            </button>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="font-semibold mb-2">Price Range (£)</h3>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                min="0"
                value={priceMin}
                onChange={(e) => setPriceMin(Number(e.target.value))}
                className="w-1/2 border rounded-lg px-2 py-1 text-sm"
              />
              <span>-</span>
              <input
                type="number"
                min="0"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-1/2 border rounded-lg px-2 py-1 text-sm"
              />
            </div>
          </div>

          {/* Brands */}
          {brandsInCategory.length > 0 && (
            <details ref={brandDetailsRef} className="border rounded-lg">
              <summary className="cursor-pointer px-3 py-2 font-medium">Brands</summary>
              <div className="px-3 py-2 text-sm space-y-1">
                {brandsInCategory.map((brand) => (
                  <label key={brand} className="block cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="mr-2"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </details>
          )}

          {/* Vitolas */}
          {vitolasInCategory.length > 0 && (
            <details ref={vitolaDetailsRef} className="border rounded-lg">
              <summary className="cursor-pointer px-3 py-2 font-medium">Vitola</summary>
              <div className="px-3 py-2 text-sm space-y-1">
                {vitolasInCategory.map((vitola) => (
                  <label key={vitola} className="block cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedVitolas.includes(vitola)}
                      onChange={() => toggleVitola(vitola)}
                      className="mr-2"
                    />
                    {vitola}
                  </label>
                ))}
              </div>
            </details>
          )}
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3 space-y-6">
          <section className="bg-white border rounded-lg p-6">
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

          {/* Product Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product: any) => (
                <div
                  key={product.id}
                  className="relative bg-white border rounded-lg p-6 hover:shadow-md transition"
                >
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-gray-100 text-black text-xs font-semibold px-3 py-1 rounded-full border">
                      {product.badge}
                    </span>
                  )}

                  <div className="bg-gray-50 p-4 rounded-md">
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

                  <h3 className="mt-4 text-center text-lg font-bold">
                    {product.name}
                  </h3>
                  <p className="text-center text-[#ff9800] font-semibold">
                    £{Number(product.price).toFixed(2)}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-lg">No products found in {title}.</p>
            )}
          </section>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-[#000100] text-[#ff9800] rounded-full disabled:opacity-50"
              >
                Previous
              </button>
              <span className="font-semibold">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-[#000100] text-[#ff9800] rounded-full disabled:opacity-50"
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
