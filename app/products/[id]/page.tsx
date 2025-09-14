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
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);

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

  // ✅ Unified addToCart
  const handleAddToCart = () => {
    if (isTobacco) {
      if (!variant) return;
      addToCart({
        id: product.id,
        name: product.name,
        price: variant.price,
        image: product.image,
        quantity,
        variant: variant.label,
      });
    } else {
      addToCart({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image,
        quantity,
      });
    }
  };

  const renderStockStatus = () => {
    if (product.stock === 0) return <p className="text-red-600">Out of Stock</p>;
    if (product.stock === "preorder")
      return <p className="text-blue-600">Pre-order Available</p>;
    return <p className="text-green-600">In Stock</p>;
  };

  const upsell = products
    .filter((p) => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const mainImage = activeImage || product.image;

  // Reward points calculation
  const rewardPoints = Math.round(Number(product.price) * 10);
  const rewardValue = (rewardPoints / 100).toFixed(2);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/category" className="hover:underline">
          Cigars
        </Link>{" "}
        › {product.brand} › {product.name}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Image Gallery */}
        <div>
          <div className="flex justify-center mb-4">
            <Image
              src={mainImage}
              alt={product.name}
              width={500}
              height={700}
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
          <div className="flex gap-3 justify-center">
            {[product.image, ...(product.gallery || [])].map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`border rounded p-1 ${
                  mainImage === img ? "border-black" : "border-gray-300"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </button>
            ))}
          </div>
          <p className="text-xs text-center text-gray-500 mt-2">
            FREE DELIVERY on orders over £50
          </p>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          {/* Price + Points */}
          {!isTobacco ? (
            <p className="text-2xl font-semibold mb-1">
              £{Number(product.price).toFixed(2)}
            </p>
          ) : variant ? (
            <p className="text-2xl font-semibold mb-1">
              £{variant.price.toFixed(2)}
            </p>
          ) : (
            <p className="text-lg text-gray-600 mb-1">Select a weight option</p>
          )}
          <p className="text-sm text-green-600 mb-4">
            Buy and earn {rewardPoints} points valued at £{rewardValue}
          </p>

          {/* Stock */}
          <div className="mb-3">{renderStockStatus()}</div>

          {/* Variant or Quantity */}
          {isTobacco ? (
            <div className="flex items-center gap-4 mb-6">
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
            <div className="flex items-center gap-4 mb-6">
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

          {/* Buttons */}
          <div className="flex flex-col gap-3 mb-6">
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
              disabled={isTobacco && !variant}
            >
              Add to Cart
            </button>
            <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-medium">
              Add to Wishlist
            </button>
          </div>

          <Link href="/category" className="secondary">
            ← Back to A–Z
          </Link>
        </div>
      </div>
    </div>
  );
}
