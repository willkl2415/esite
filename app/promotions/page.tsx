"use client";

import CategoryPage from "../components/CategoryPage";

export default function PromotionsPage() {
  const products = [
    { id: 1, name: "Discounted Sampler Pack", image: "/cigar-1.png", badge: "Sale" },
    { id: 2, name: "Buy 2 Get 1 Free", image: "/cigar-2.png" },
    { id: 3, name: "Special Edition Cigar", image: "/cigar-3.png", badge: "Limited" },
  ];

  return (
    <CategoryPage
      title="Promotions"
      description="Take advantage of our latest promotions — unbeatable deals on premium cigars, accessories, and exclusive bundles."
      products={products}
    />
  );
}
