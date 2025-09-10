"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";

export default function MyLockerPage() {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const { addToCart } = useCart();

  // Load wishlist from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  // Save wishlist back to localStorage
  const saveWishlist = (items: string[]) => {
    setWishlist(items);
    localStorage.setItem("wishlist", JSON.stringify(items));
  };

  const handleRemove = (id: string) => {
    saveWishlist(wishlist.filter((w) => w !== id));
  };

  const handleMoveToCart = (id: string) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      addToCart(product.id, 1);
      handleRemove(id);
    }
  };

  const savedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">My Locker (Wishlist)</h1>

      {savedProducts.length === 0 ? (
        <div className="text-center">
          <p className="mb-6">Your locker is empty.</p>
          <Link href="/category" className="primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {savedProducts.map((p) => (
            <div
              key={p.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col"
            >
              <Image
                src={p.image}
                alt={p.name}
                width={250}
                height={350}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-500">£{p.price.toFixed(2)}</p>

              <div className="mt-auto flex flex-col gap-2">
                <button
                  onClick={() => handleMoveToCart(p.id)}
                  className="w-full bg-black text-white py-2 rounded-lg font-medium"
                >
                  Move to Cart
                </button>
                <button
                  onClick={() => handleRemove(p.id)}
                  className="w-full bg-red-600 text-white py-2 rounded-lg font-medium"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
