"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";
import { useSearch } from "@/app/context/SearchContext"; // ✅ import search

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { setQuery } = useSearch(); // ✅ access search

  // ✅ Clear search on load
  useEffect(() => {
    setQuery("");
  }, [setQuery]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link
          href="/category"
          className="text-[#ff9800] font-semibold hover:underline"
        >
          ← Back to A–Z
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Product Image */}
      <div className="flex justify-center items-start">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={600}
          className="rounded-lg shadow-lg object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-start">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl text-[#ff9800] font-semibold mb-6">
          £{product.price.toFixed(2)}
        </p>
        <p className="text-gray-700 mb-8">{product.description}</p>

        {/* Quantity + Add to Basket */}
        <div className="flex items-center gap-4 mb-8">
          <label htmlFor="quantity" className="font-medium">
            Quantity:
          </label>
          <select
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border rounded px-3 py-2"
          >
            {[...Array(10).keys()].map((n) => (
              <option key={n + 1} value={n + 1}>
                {n + 1}
              </option>
            ))}
          </select>
          <button
            onClick={() => addToCart(product.id, quantity)}
            className="bg-[#ff9800] text-white px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-[#ff9800] transition"
          >
            Add to Basket
          </button>
        </div>

        {/* Back Link */}
        <Link
          href="/category"
          className="text-sm font-medium text-black hover:text-[#ff9800] transition"
        >
          ← Back to A–Z
        </Link>
      </div>
    </div>
  );
}
