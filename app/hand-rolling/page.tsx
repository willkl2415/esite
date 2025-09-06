"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Hand rolling tobacco dataset
const tobaccos = [
  {
    id: "auld-kendal-dark",
    name: "Auld Kendal Dark Hand Rolling Tobacco",
    price: "£21.00 – £73.20",
    image: "/auld-kendal-dark.png",
  },
  {
    id: "auld-kendal-georgia",
    name: "Auld Kendal Georgia Blend Hand Rolling Tobacco",
    price: "£21.00 – £73.20",
    image: "/auld-kendal-georgia.png",
  },
  {
    id: "auld-kendal-golden",
    name: "Auld Kendal Golden Blend Hand Rolling Tobacco",
    price: "£21.00 – £73.20",
    image: "/auld-kendal-golden.png",
  },
  {
    id: "auld-kendal-mixed",
    name: "Auld Kendal Mixed Blend Hand Rolling Tobacco",
    price: "£21.00 – £73.20",
    image: "/auld-kendal-mixed.png",
  },
  {
    id: "auld-kendal-turkish",
    name: "Auld Kendal Turkish Hand Rolling Tobacco",
    price: "£21.00 – £73.20",
    image: "/auld-kendal-turkish.png",
  },
  {
    id: "auld-kendal-golden-500g",
    name: "Auld Kendal Golden Blend Hand Rolling Tobacco - 500g",
    price: "£365.00",
    image: "/auld-kendal-golden-500g.png",
  },
  {
    id: "pueblo-blue",
    name: "Pueblo Blue Hand Rolling Tobacco",
    price: "£21.00 – £70.00",
    image: "/pueblo-blue.png",
  },
  {
    id: "pueblo-classic-250g",
    name: "Pueblo Classic Additive Free Hand Rolling Tobacco - 250g",
    price: "£190.70",
    image: "/pueblo-classic-250g.png",
  },
  {
    id: "pueblo-classic-30g",
    name: "Pueblo Classic Additive Free Hand Rolling Tobacco - 30g Pouch",
    price: "£21.00",
    image: "/pueblo-classic-30g.png",
  },
  {
    id: "pueblo-classic",
    name: "Pueblo Classic Hand Rolling Tobacco",
    price: "£21.00 – £70.00",
    image: "/pueblo-classic.png",
  },
];

export default function HandRollingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
          Explore Our Hand Rolling Tobacco
        </h1>
        <p className="text-gray-700 text-base md:text-lg">
          From traditional blends to additive-free selections, discover our full
          portfolio of premium hand rolling tobaccos.
        </p>
      </section>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tobaccos.map((t) => (
            <div
              key={t.id}
              className="relative bg-white border border-[#000100] rounded-2xl overflow-hidden p-4 shadow-sm hover:shadow-lg transition"
            >
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <Link href={`/hand-rolling/${t.id}`}>
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={220}
                    height={220}
                    className="mx-auto h-44 w-auto object-contain"
                  />
                </Link>
              </div>

              <h3 className="mt-3 text-center text-[#000100] font-serif text-lg font-bold tracking-wide">
                {t.name}
              </h3>
              <p className="text-center text-sm text-gray-700">{t.price}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
