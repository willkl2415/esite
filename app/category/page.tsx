"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cigarBrands, CigarBrand } from "../data/cigarBrands";
import { placeholderImages } from "../data/products";

export default function CategoryPage() {
  const [openBrand, setOpenBrand] = useState<string | null>(null);

  const toggleBrand = (brand: string) => {
    setOpenBrand(openBrand === brand ? null : brand);
  };

  // Filter images based on selected brand
  const filteredImages = openBrand
    ? placeholderImages.filter((img) => img.brand === openBrand)
    : placeholderImages;

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
            of cigars. Browse by brand and expand to see their vitolas.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="flex-1 max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar: Accordion A–Z */}
        <aside className="md:col-span-1 sticky top-28 self-start h-fit">
          <h2 className="text-xl font-semibold mb-4">Brands A–Z</h2>
          <ul className="space-y-2 text-gray-700">
            {cigarBrands.map((brandObj: CigarBrand, i: number) => (
              <li key={i} className="border-b pb-2">
                <button
                  onClick={() => toggleBrand(brandObj.brand)}
                  className="w-full flex justify-between items-center text-left font-semibold hover:text-[#ff9800] transition"
                >
                  <span>{brandObj.brand}</span>
                  <span className="text-xl">
                    {openBrand === brandObj.brand ? "−" : "+"}
                  </span>
                </button>

                {/* Vitolas Accordion */}
                {openBrand === brandObj.brand && (
                  <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-600 list-disc">
                    {brandObj.vitolas.map((vitola: string, idx: number) => (
                      <li key={idx}>
                        <Link href="#" className="hover:text-black transition">
                          {vitola}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main panel with filtered image grid */}
        <div className="md:col-span-3">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((img) => (
                <div key={img.src} className="flex justify-center">
                  <Image
                    src={img.src}
                    alt={img.brand || "Cigar placeholder"}
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">
              No images available for this brand.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
