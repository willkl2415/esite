"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { products } from "../data/products";

export default function CategoryPage() {
  const brands = Array.from(new Set(products.map((p) => p.brand))).sort();
  const [openBrand, setOpenBrand] = useState<string | null>(null);

  const toggleBrand = (brand: string) => {
    setOpenBrand(openBrand === brand ? null : brand);
  };

  // Special Releases list (from your provided data)
  const specialReleases = [
    "Bolívar Belgravia",
    "Bolívar Libertador",
    "Cohiba Talisman",
    "Cuaba Distinguidos",
    "Cuaba Divinos",
    "Cuaba Salomones",
    "Cuaba Tradicionales",
    "H. Upmann Royal Robusto",
    "Hoyo de Monterrey Elegantes",
    "Hoyo de Monterrey Epicure de Luxe",
    "Juan Lopez Selección Superba",
    "Montecristo Churchills (limited runs)",
    "Partagás Culebras",
    "Partagás Serie D No.5 (limited editions)",
    "Partagás Serie D No.6 (special release)",
    "Punch Punch 48",
    "Quai d’Orsay No.50 (initially special)",
    "Ramón Allones Allones Superiores",
    "Romeo y Julieta Cedros de Luxe",
    "Romeo y Julieta Piramides (specials and LE)",
    "Trinidad La Trova",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Page Header */}
      <section className="w-full bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-12 text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Explore Our Cigars
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            From Cuban classics to New World gems, discover our full portfolio
            of cigars. Browse by brand or explore our featured collections.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="flex-1 max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar: Accordion A–Z */}
        <aside className="md:col-span-1 sticky top-28 self-start h-fit">
          <h2 className="text-xl font-semibold mb-4">Brands A–Z</h2>
          <ul className="space-y-2 text-gray-700">
            {brands.map((brand, i) => (
              <li key={i} className="border-b pb-2">
                {/* Brand Toggle */}
                <button
                  onClick={() => toggleBrand(brand)}
                  className="w-full flex justify-between items-center text-left font-semibold hover:text-[#ff9800] transition"
                >
                  <span>{brand}</span>
                  <span className="text-xl">
                    {openBrand === brand ? "−" : "+"}
                  </span>
                </button>

                {/* Vitolas shown when expanded */}
                {openBrand === brand && (
                  <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-600">
                    {products
                      .filter((p) => p.brand === brand)
                      .map((product) => (
                        <li key={product.id}>
                          <Link
                            href={`/${product.category}/${product.id}`}
                            className="hover:text-black transition"
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Special Releases Accordion */}
            <li className="border-b pb-2">
              <button
                onClick={() => toggleBrand("Special Releases")}
                className="w-full flex justify-between items-center text-left font-semibold hover:text-[#ff9800] transition"
              >
                <span>Special Releases</span>
                <span className="text-xl">
                  {openBrand === "Special Releases" ? "−" : "+"}
                </span>
              </button>

              {openBrand === "Special Releases" && (
                <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-600 list-disc">
                  {specialReleases.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </aside>

        {/* Product Grid (optional full listing if desired) */}
        <div className="md:col-span-3">
          <p className="text-gray-600 italic">
            Select a brand from the left to explore its vitolas.
          </p>
        </div>
      </section>
    </div>
  );
}
