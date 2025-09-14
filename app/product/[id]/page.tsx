"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";
import { useSearch } from "@/app/context/SearchContext";

type Variant = { label: string; price: number };

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
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

  const isTobacco = product.category === "hand-rolling";
  const tobaccoVariants: Variant[] = [
    { label: "30g", price: 21.0 },
    { label: "50g", price: 35.0 },
    { label: "100g", price: 73.2 },
    { label: "250g", price: 190.7 },
    { label: "500g", price: 365.0 },
  ];

  const basePrice = Number((product as any).price) || 0;
  const chosenPrice = isTobacco ? variant?.price || 0 : basePrice;

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
        price: basePrice,
        image: product.image,
        quantity,
      });
    }
  };

  // … keep the rest of your UI unchanged, just ensure any other addToCart calls use the same object form
}
