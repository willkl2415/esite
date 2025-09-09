"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";
import { useSearch } from "@/app/context/SearchContext";

type Variant = {
  label: string;
  price: number;
};

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState<Variant | null>(null);

  const { addToCart } = useCart();
  const { setQuery } = useSearch();

  useEffect(() => {
    setQuery("");
  }, [setQuery]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link href="/category" className="secondary">
          ← Back to A–Z
        </Link>
      </div>
    );
  }

  const isTobacco = product.category === "hand-rolling";

  const tobaccoVariants: Variant[] = [
    { label: "30g", price: 21.0 },
    { label: "50g", price: 35.0 },
    { label: "100g", price: 73.2 },
    { label: "250g", price: 190.7 },
    { label: "500g", price: 365.0 },
  ];

  const handleAddToCart = () => {
    if (isTobacco) {
      if (!variant) return;
      addToCart(product.id, quantity, variant.label, variant.price);
    } else {
      addToCart(product.id, quantity);
    }
  };

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

        {!isTobacco ? (
          <p className="text-2xl font-semibold mb-6">
            £{Number(product.price).toFixed(2)}
          </p>
        ) : variant ? (
          <p className="text-2xl font-semibold mb-6">
            £{variant.price.toFixed(2)}
          </p>
        ) : (
          <p className="text-lg text-gray-600 mb-6">Select a weight option</p>
        )}

        <p className="text-gray-700 mb-8">{product.description}</p>

        {isTobacco ? (
          <div className="flex items-center gap-4 mb-8">
            <label htmlFor="variant" className="font-medium">
              Weight:
            </label>
            <select
              id="variant"
              value={variant?.label || ""}
              onChange={(e) => {
                const v =
                  tobaccoVariants.find((t) => t.label === e.target.value) ||
                  null;
                setVariant(v);
              }}
              className="border rounded px-3 py-2"
            >
              <option value="">Choose an option</option>
              {tobaccoVariants.map((v) => (
                <option key={v.label} value={v.label}>
                  {v.label}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddToCart}
              className="primary"
              disabled={!variant}
