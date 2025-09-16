"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p: any) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState<string[]>([]);

  // ✅ Load wishlist from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("wishlist");
      setWishlist(stored ? JSON.parse(stored) : []);
    }
  }, []);

  const handleAddToWishlist = () => {
    if (!product) return;
    const updated = [...wishlist, product.id];
    setWishlist(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem("wishlist", JSON.stringify(updated));
    }
  };

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link href="/products" className="secondary">
          ← Back to products
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
        <p className="text-2xl font-semibold mb-6">£{Number(product.price).toFixed(2)}</p>
        <p className="text-gray-700 mb-8">{product.description}</p>

        {/* Quantity + Actions */}
        <div className="flex items-center gap-4 mb-8">
          <label htmlFor="quantity" className="font-medium">Quantity:</label>
          <select
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border rounded px-3 py-2"
          >
            {[...Array(10).keys()].map((n) => (
              <option key={n + 1} value={n + 1}>{n + 1}</option>
            ))}
          </select>
          <button
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.name,
                price: Number(product.price),
                image: product.image,
                quantity,
              })
            }
            className="primary"
          >
            Add to Basket
          </button>
          <button onClick={handleAddToWishlist} className="secondary">
            Add to Wishlist
          </button>
        </div>

        {/* Back Link */}
        <Link href="/products" className="secondary">← Back to products</Link>
      </div>
    </div>
  );
}
