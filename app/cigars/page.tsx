"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";

const gbp = (n: number) => `£${n.toFixed(2)}`;

export default function CigarsAZPage() {
  const { addToCart } = useCart();

  const cigars = useMemo(
    () =>
      products.filter((p: any) =>
        ["cigars", "awarded-cigars", "product", "new-world-cigars"].includes(p.category)
      ),
    []
  );

  const add = (p: any) => {
    const price = Number(p.price) || 0;
    addToCart({ id: p.id, name: p.name, price, image: p.image, quantity: 1 });
    alert("Added to cart");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">A–Z Cigars</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cigars.map((p) => (
          <div key={p.id} className="border rounded-2xl p-4 bg-white">
            <Link href={`/products/${p.id}`}>
              <Image src={p.image} alt={p.name} width={220} height={220} className="mx-auto object-contain" />
            </Link>
            <h3 className="font-semibold mt-3 text-center">{p.name}</h3>
            <p className="text-sm text-gray-600 text-center">
              {typeof p.price === "number" ? gbp(p.price) : p.price}
            </p>
            <div className="mt-3 flex gap-2">
              <button className="primary w-1/2" onClick={() => add(p)}>Add to Cart</button>
              <Link className="secondary w-1/2 text-center" href={`/products/${p.id}`}>View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
