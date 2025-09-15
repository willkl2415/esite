"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";

export default function MyLockerPage() {
  const [locker, setLocker] = useState<string[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setLocker(Array.isArray(saved) ? saved : []);
    } catch {
      setLocker([]);
    }
  }, []);

  const handleRemove = (id: string) => {
    const next = locker.filter((x) => x !== id);
    setLocker(next);
    try {
      localStorage.setItem("wishlist", JSON.stringify(next));
    } catch {}
  };

  const handleMoveToCart = (id: string) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;
    addToCart({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.image,
      quantity: 1,
    });
    handleRemove(id);
  };

  const items = products.filter((p) => locker.includes(p.id));

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">My Locker</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">
          Your locker is empty. Explore products in the{" "}
          <Link className="underline" href="/category">A–Z Cigars</Link>.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.id} className="border rounded-lg p-4 shadow">
              <Image
                src={p.image}
                alt={p.name}
                width={220}
                height={220}
                className="mx-auto h-44 w-auto object-contain"
              />
              <h3 className="mt-3 text-lg font-semibold text-center">{p.name}</h3>
              <p className="text-center text-sm text-gray-600">
                £{Number(p.price as number).toFixed(2)}
              </p>
              <div className="mt-3 flex gap-2">
                <button className="primary flex-1" onClick={() => handleMoveToCart(p.id)}>
                  Move to Cart
                </button>
                <button className="secondary flex-1" onClick={() => handleRemove(p.id)}>
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
