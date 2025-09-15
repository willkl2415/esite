"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";
import { useSearch } from "@/app/context/SearchContext";

type Variant = { label: string; price: number };

const toNumber = (v: number | string): number =>
  typeof v === "number"
    ? v
    : parseFloat(String(v).replace(/[^\d.,]/g, "").replace(",", ".")) || 0;
const gbp = (n: number) => `£${n.toFixed(2)}`;

export default function ProductPage() {
  const { id } = useParams() as { id: string };
  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState<Variant | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const { addToCart } = useCart();
  const { setQuery } = useSearch();

  useEffect(() => setQuery(""), [setQuery]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link href="/category" className="secondary">← Back to A–Z</Link>
      </div>
    );
  }

  const isTobacco = (product as any).category === "hand-rolling";
  const tobaccoVariants: Variant[] = [
    { label: "30g", price: 21.0 },
    { label: "50g", price: 35.0 },
    { label: "100g", price: 73.2 },
    { label: "250g", price: 190.7 },
    { label: "500g", price: 365.0 },
  ];

  const basePrice = toNumber((product as any).price);
  const chosenPrice = isTobacco ? variant?.price || 0 : basePrice;

  const handleAddToCart = () => {
    // Enforce variant for tobacco
    if (isTobacco && !variant) return;

    addToCart({
      id: product.id,
      name: product.name,
      price: chosenPrice || basePrice,
      image: product.image,
      quantity,
      variant: variant?.label,
    });
  };

  const handleAddToWishlist = () => {
    try {
      const key = "wishlist";
      const curr: string[] = JSON.parse(localStorage.getItem(key) || "[]");
      if (!curr.includes(product.id)) {
        curr.push(product.id);
        localStorage.setItem(key, JSON.stringify(curr));
      }
    } catch {}
  };

  const rewardPoints = Math.round((chosenPrice || basePrice) * 10);
  const rewardValue = (rewardPoints / 100).toFixed(2);

  const gallery = [product.image, ...((product as any).gallery ?? [])];
  const mainImage = activeImage || product.image;

  const upsell = products
    .filter((p) => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/category" className="hover:underline">Cigars</Link> › {(product as any).brand} › {product.name}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex justify-center mb-4">
            <Image
              src={mainImage}
              alt={product.name}
              width={500}
              height={700}
              className="rounded-lg shadow-lg object-contain bg-white"
            />
          </div>
          <div className="flex gap-3 justify-center">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(img)}
                className={`border rounded p-1 ${mainImage === img ? "border-black" : "border-gray-300"}`}
              >
                <Image src={img} alt={`${product.name} thumbnail ${idx + 1}`} width={80} height={80} className="object-contain" />
              </button>
            ))}
          </div>
          <p className="text-xs text-center text-gray-500 mt-2">FREE DELIVERY on orders over £50</p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <p className="text-2xl font-semibold mb-1">{gbp(chosenPrice || basePrice)}</p>
          <p className="text-sm text-green-600 mb-4">
            Buy and earn {rewardPoints} points valued at £{rewardValue}
          </p>

          {isTobacco ? (
            <div className="flex items-center gap-4 mb-6">
              <label htmlFor="variant" className="font-medium">Weight:</label>
              <select
                id="variant"
                value={variant?.label || ""}
                onChange={(e) => {
                  const v = tobaccoVariants.find((t) => t.label === e.target.value) || null;
                  setVariant(v);
                }}
                className="border rounded px-3 py-2"
              >
                <option value="">Choose an option</option>
                {tobaccoVariants.map((v) => (
                  <option key={v.label} value={v.label}>{v.label}</option>
                ))}
              </select>
            </div>
          ) : (
            <div className="flex items-center gap-4 mb-6">
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
            </div>
          )}

          <div className="flex flex-col gap-3 mb-6">
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
              disabled={isTobacco && !variant}
            >
              Add to Cart
            </button>
            <button onClick={handleAddToWishlist} className="w-full bg-gray-600 text-white py-3 rounded-lg font-medium">
              Add to Wishlist
            </button>
          </div>

          <Link href="/category" className="secondary">← Back to A–Z</Link>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You may also like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upsell.map((u) => (
            <div key={u.id} className="border rounded-lg p-4 shadow">
              <Image src={u.image} alt={u.name} width={250} height={350} className="mx-auto mb-4 object-contain" />
              <h3 className="text-lg font-semibold">{u.name}</h3>
              <p className="text-sm text-gray-500">£{toNumber(u.price).toFixed(2)}</p>
              <Link href={`/products/${u.id}`} className="mt-3 inline-block primary">View Product</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
