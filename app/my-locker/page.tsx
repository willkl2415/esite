"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";

const WISHLIST_KEY = "wishlist";
const gbp = (n: number) => `£${n.toFixed(2)}`;

export default function MyLockerPage() {
  const [ids, setIds] = useState<string[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    try {
      const raw = localStorage.getItem(WISHLIST_KEY);
      setIds(raw ? (JSON.parse(raw) as string[]) : []);
    } catch {
      setIds([]);
    }
  }, []);

  const items = useMemo(() => products.filter(p => ids.includes(p.id)), [ids]);

  const handleRemove = (id: string) => {
    try {
      const next = ids.filter(x => x !== id);
      setIds(next);
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(next));
    } catch {}
  };

  const handleMoveToCart = (id: string) => {
    const product = products.find(p => p.id === id);
    if (!product) return;
    addToCart({
      id: product.id,
      name: product.name,
      price: Number(product.price) || 0,
      image: product.image,
      quantity: 1,
    });
    handleRemove(id);
    alert("Moved to cart");
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-3">My Locker</h1>
        <p className="text-gray-600 mb-6">Your wishlist is empty.</p>
        <Link href="/category" className="primary">Browse Cigars</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">My Locker</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map(p => (
          <div key={p.id} className="border rounded-2xl p-4 shadow-sm bg-white">
            <Link href={`/products/${p.id}`}><Image src={p.image} alt={p.name} width={220} height={220} className="mx-auto object-contain" /></Link>
            <h3 className="mt-3 text-center font-semibold">{p.name}</h3>
            <p className="text-center text-sm text-gray-600">{typeof p.price === "number" ? gbp(p.price) : p.price}</p>

            <div className="mt-4 flex gap-2">
              <button className="secondary w-1/2" onClick={() => handleMoveToCart(p.id)}>Move to Cart</button>
              <button className="danger w-1/2" onClick={() => handleRemove(p.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
