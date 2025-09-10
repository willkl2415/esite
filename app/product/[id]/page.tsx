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

  // Stock message
  const renderStockStatus = () => {
    if (product.stock === 0) return <p className="text-red-600">Out of Stock</p>;
    if (product.stock === "preorder")
      return <p className="text-blue-600">Pre-order Available</p>;
    return <p className="text-green-600">In Stock</p>;
  };

  // Pick 3 upsell products (exclude current)
  const upsell = products
    .filter((p) => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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

          {/* Price */}
          {!isTobacco ? (
            <p className="text-2xl font-semibold mb-2">
              £{Number(product.price).toFixed(2)}
            </p>
          ) : variant ? (
            <p className="text-2xl font-semibold mb-2">
              £{variant.price.toFixed(2)}
            </p>
          ) : (
            <p className="text-lg text-gray-600 mb-2">Select a weight option</p>
          )}

          {/* Stock */}
          <div className="mb-4">{renderStockStatus()}</div>

          {/* Free Delivery */}
          <p className="text-sm text-gray-500 mb-6">
            Free Delivery on orders over <strong>£xx</strong>
          </p>

          <p className="text-gray-700 mb-8">{product.description}</p>

          {/* Tobacco Variant Dropdown */}
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
            </div>
          ) : (
            /* Cigar Quantity Dropdown */
            <div className="flex items-center gap-4 mb-8">
              <label htmlFor="quantity" className="font-medium">
                Quantity:
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border rounded px-3 py-2"
              >
                {[...Array(10).keys()].map((n) => (
                  <option key={n + 1} value={n + 1}>
                    {n + 1}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mb-10">
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 rounded-lg font-medium"
              disabled={isTobacco && !variant}
            >
              Add to Cart
            </button>
            <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium">
              Add to Subscription
            </button>
            <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-medium">
              Add to Wishlist
            </button>
            <button className="w-full bg-yellow-600 text-white py-3 rounded-lg font-medium">
              Write a Review
            </button>
          </div>

          {/* Back Link */}
          <Link href="/category" className="secondary">
            ← Back to A–Z
          </Link>
        </div>
      </div>

      {/* Upsell Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You may also like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upsell.map((u) => (
            <div
              key={u.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <Image
                src={u.image}
                alt={u.name}
                width={250}
                height={350}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold">{u.name}</h3>
              <p className="text-sm text-gray-500">£{u.price.toFixed(2)}</p>
              <Link
                href={`/product/${u.id}`}
                className="mt-3 inline-block primary"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
