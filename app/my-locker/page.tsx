"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";

export default function MyLockerPage() {
  const { addToCart } = useCart();
  const [lockerItems, setLockerItems] = useState<string[]>([]);

  // ✅ Only access localStorage in the browser
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("myLocker");
      setLockerItems(stored ? JSON.parse(stored) : []);
    }
  }, []);

  const handleRemove = (id: string) => {
    const updated = lockerItems.filter((item) => item !== id);
    setLockerItems(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem("myLocker", JSON.stringify(updated));
    }
  };

  const handleMoveToCart = (id: string) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image,
        quantity: 1,
      });
      handleRemove(id);
    }
  };

  if (lockerItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">My Locker</h1>
        <p className="mb-6">You have no saved items in your locker.</p>
        <Link href="/" className="primary">
          Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">My Locker</h1>
      <ul className="space-y-6">
        {lockerItems.map((id) => {
          const product = products.find((p) => p.id === id);
          if (!product) return null;
          return (
            <li
              key={id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">£{Number(product.price).toFixed(2)}</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => handleMoveToCart(id)}
                  className="primary"
                >
                  Move to Cart
                </button>
                <button
                  onClick={() => handleRemove(id)}
                  className="secondary"
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
