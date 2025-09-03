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
        {/* Sidebar: Sticky Brands A–Z */}
        <aside className="md:col-span-1 sticky top-28 self-start h-fit">
          <h2 className="text-xl font-semibold mb-4">Brands A–Z</h2>
          <ul className="space-y-2 text-gray-700">
            {brands.map((brand, i) => (
              <li key={i}>
                <Link
                  href={`#${brand.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-[#ff9800] transition-colors"
                >
                  {brand}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#special-releases"
                className="hover:text-[#ff9800] transition-colors"
              >
                Special Releases
              </Link>
            </li>
          </ul>
        </aside>

        {/* Accordion: Brands */}
        <div className="md:col-span-3">
          {brands.map((brand) => (
            <div
              key={brand}
              id={brand.toLowerCase().replace(/\s+/g, "-")}
              className="mb-6 border rounded-lg shadow-sm"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleBrand(brand)}
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition"
              >
                <span className="text-lg font-semibold">{brand}</span>
                <span className="text-xl">
                  {openBrand === brand ? "−" : "+"}
                </span>
              </button>

              {/* Accordion Body */}
              {openBrand === brand && (
                <div className="p-4 border-t">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products
                      .filter((p) => p.brand === brand)
                      .map((product) => (
                        <div
                          key={product.id}
                          className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                        >
                          <Link href={`/${product.category}/${product.id}`}>
                            <div className="relative w-full h-64 bg-gray-100">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-4"
                              />
                            </div>
                            <div className="p-4 text-center">
                              <h4 className="font-semibold text-lg">
                                {product.name}
                              </h4>
                              <p className="text-gray-500">
                                £{Number(product.price).toFixed(2)}
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Special Releases Section */}
          <div id="special-releases" className="mb-6 border rounded-lg shadow-sm">
            <button
              onClick={() => toggleBrand("Special Releases")}
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="text-lg font-semibold">Special Releases</span>
              <span className="text-xl">
                {openBrand === "Special Releases" ? "−" : "+"}
              </span>
            </button>

            {openBrand === "Special Releases" && (
              <div className="p-4 border-t">
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  {specialReleases.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
