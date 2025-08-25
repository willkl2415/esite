"use client";

import CategoryPage from "../components/CategoryPage";

export default function GiftsPage() {
  const products = [
    { id: 1, name: "Luxury Cigar Gift Box", image: "/cigar-1.png", badge: "Popular" },
    { id: 2, name: "Cigar Sampler Gift Pack", image: "/cigar-2.png" },
    { id: 3, name: "Premium Lighter Gift Set", image: "/cigar-3.png" },
  ];

  return (
    <CategoryPage
      title="Gifts"
      description="Discover our carefully curated range of cigar gifts — from luxury samplers to accessories, perfect for every aficionado."
      products={products}
    />
  );
}
