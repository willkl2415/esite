"use client";

import React, { useState } from "react";
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
  const [priceMax, setPriceMax] = useState(100);
  const [applyFilters, setApplyFilters] = useState(false);
  const [sortOption, setSortOption] = useState("Default Sorting");

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleVitola = (vitola: string) => {
    setSelectedVitolas((prev) =>
      prev.includes(vitola) ? prev.filter((v) => v !== vitola) : [...prev, vitola]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrands([]);
    setSelectedVitolas([]);
    setPriceMin(0);
    setPriceMax(100);
    setApplyFilters(false);
    setSortOption("Default Sorting");
  };

  // ✅ Apply filters
  let displayedProducts = filtered.filter((p: any) => {
    if (!applyFilters) {
      return p.name.toLowerCase().includes(searchTerm.toLowerCase());
    }

    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
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
        return (b.dateAdded || 0) - (a.dateAdded || 0);
      case "Top 5 Sellers":
        return (b.sales || 0) - (a.sales || 0);
      case "Average Rating":
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-[#ff9800] p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="bg-white shadow-lg p-6 rounded-2xl space-y-6">
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
              className="bg-[#000100] text-[#ff9800] font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-[#000100] transition"
            >
              FILTER
            </button>
            <button
              onClick={clearFilters}
              className="border border-[#000100] text-[#000100] px-4 py-2 rounded-full hover:bg-[#000100] hover:text-white transition"
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
            <details className="border rounded-lg">
              <summary className="cursor-pointer px-3 py-2 font-medium">Brands</summary>
              <div className="px-3 py-2 text-sm text-gray-600 space-y-1">
                {brandsInCategory.map((brand) => (
                  <label key={brand} className="block">
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
            <details className="border rounded-lg">
              <summary className="cursor-pointer px-3 py-2 font-medium">Vitola</summary>
              <div className="px-3 py-2 text-sm text-gray-600 space-y-1">
                {vitolasInCategory.map((vitola) => (
                  <label key={vitola} className="block">
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
          <section className="bg-white shadow-lg p-6 rounded-2xl">
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
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product: any) => (
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
