"use client";

import React, { useMemo } from "react";
import { products } from "../../data/products";
import Link from "next/link";
import Image from "next/image";

export default function SalePage() {
  const saleProducts = useMemo(
    () => products.filter((p) => p.badge?.toLowerCase() === "sale"),
    []
  );

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Special Offers</h1>

      {saleProducts.length === 0 ? (
        <p>No sale items available at the moment. Please check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {saleProducts.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="border rounded-lg shadow hover:shadow-lg transition p-4 bg-white"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.brand}</p>
              <p className="mt-2 font-bold">£{product.price}</p>
              <span className="inline-block mt-2 text-xs font-semibold bg-red-500 text-white px-2 py-1 rounded">
                SALE
              </span>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
