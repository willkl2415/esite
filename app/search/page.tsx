"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";

const normalize = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
const gbp = (n: number) => `£${n.toFixed(2)}`;

export default function SearchPage() {
  const [q, setQ] = useState("");
  const { addToCart } = useCart();

  const results = useMemo(() => {
    const n = normalize(q);
    if (n.length < 2) return [];
    return products.filter((p) =>
      normalize(p.name).includes(n) || normalize((p as any).brand ?? "").includes(n)
    ).slice(0, 30);
  }, [q]);

  const add = (p: any) => {
    const price = Number(p.price) || 0;
    addToCart({ id: p.id, name: p.name, price, image: p.image, quantity: 1 });
    alert("Added to cart");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <input
        className="w-full border rounded-lg px-4 py-2 mb-6"
        placeholder="Search cigars, brands, accessories…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      {results.length === 0 ? (
        <p className="text-gray-600">Type at least 2 characters to search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((p) => (
            <div key={p.id} className="border rounded-2xl p-4 bg-white">
              <Link href={`/products/${p.id}`}>
                <Image src={p.image} alt={p.name} width={220} height={220} className="mx-auto object-contain" />
              </Link>
              <h3 className="font-semibold mt-3">{p.name}</h3>
              <p className="text-sm text-gray-600">
                {typeof p.price === "number" ? gbp(p.price) : p.price}
              </p>
              <div className="mt-3 flex gap-2">
                <button className="primary w-1/2" onClick={() => add(p)}>Add to Cart</button>
                <Link className="secondary w-1/2 text-center" href={`/products/${p.id}`}>View</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
