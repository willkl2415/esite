"use client";

import { useEffect, useState } from "react";

const KEY = "wishlist";

export default function WishlistButton({ productId }: { productId: string }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const curr: string[] = JSON.parse(localStorage.getItem(KEY) || "[]");
      setSaved(curr.includes(productId));
    } catch {}
  }, [productId]);

  const toggle = () => {
    try {
      const curr: string[] = JSON.parse(localStorage.getItem(KEY) || "[]");
      const exists = curr.includes(productId);
      const next = exists ? curr.filter(id => id !== productId) : [...curr, productId];
      localStorage.setItem(KEY, JSON.stringify(next));
      setSaved(!exists);
      alert(exists ? "Removed from wishlist" : "Added to wishlist");
    } catch {}
  };

  return (
    <button type="button" onClick={toggle} className="w-full bg-gray-600 text-white py-3 rounded-lg">
      {saved ? "Saved to Wishlist" : "Add to Wishlist"}
    </button>
  );
}
