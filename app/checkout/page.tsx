"use client";

import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>
      <p className="text-gray-600 mb-6">
        This is a placeholder checkout page. You can integrate payment and shipping details here.
      </p>
      <Link
        href="/cart"
        className="bg-[#ff9800] text-white px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-[#ff9800] transition"
      >
        ← Back to Basket
      </Link>
    </div>
  );
}
