"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "../../data/products";
import { useCart } from "@/app/context/CartContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p: any) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link href="/promotions" className="secondary">
          ← Back to promotions
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="flex justify-center items-start">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={600}
          className="rounded-lg shadow-lg object-contain"
        />
      </div>
      <div className="flex flex-col justify-start">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl font-semibold mb-6">£{Number(product.price).toFixed(2)}</p>
        <p className="text-gray-700 mb-8">{product.description}</p>

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
          <button onClick={() => addToCart(product.id, quantity)} className="primary">
            Add to Basket
          </button>
        </div>

        <Link href="/promotions" className="secondary">← Back to promotions</Link>
      </div>
    </div>
  );
}
