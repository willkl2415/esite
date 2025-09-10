"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const points = subtotal; // 1 point = £1 spent

  const handleAgeVerify = () => {
    // 🔒 Stubbed digital age verification (replace with Yoti SDK later)
    setIsAgeVerified(true);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Basket is Empty</h1>
        <Link href="/category" className="primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {/* === Order Summary === */}
      <div className="border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <ul className="space-y-2 mb-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between text-sm text-gray-700"
            >
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>£{(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p className="font-semibold">Subtotal: £{subtotal.toFixed(2)}</p>
      </div>

      {/* === Info Banners === */}
      <div className="bg-gray-100 border rounded-lg p-4 mb-6">
        <p className="text-sm">
          Free Delivery on orders over <strong>£xx</strong>
        </p>
        <p className="text-sm">
          Earn <strong>{points}</strong> loyalty points with this order.
        </p>
      </div>

      {/* === Age Verification === */}
      {!isAgeVerified ? (
        <div className="bg-red-50 border border-red-300 text-red-800 rounded-lg p-6 text-center mb-6">
          <h2 className="text-lg font-semibold mb-2">Age Verification Required</h2>
          <p className="mb-4">
            You must complete digital age verification before continuing to payment.
          </p>
          <button
            onClick={handleAgeVerify}
            className="primary"
          >
            Verify Age with Yoti (Sandbox)
          </button>
        </div>
      ) : (
        <div className="bg-green-50 border border-green-300 text-green-800 rounded-lg p-6 text-center mb-6">
          ✅ Age verified successfully. You may continue.
        </div>
      )}

      {/* === Guest Checkout Form === */}
      <div className="border rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Billing & Shipping Information</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name *" className="border p-2 rounded" required />
          <input type="text" placeholder="Last Name *" className="border p-2 rounded" required />
          <input type="email" placeholder="Email Address *" className="border p-2 rounded" required />
          <input type="tel" placeholder="Telephone *" className="border p-2 rounded" required />
          <input type="text" placeholder="Street Address *" className="border p-2 rounded md:col-span-2" required />
          <input type="text" placeholder="City *" className="border p-2 rounded" required />
          <input type="text" placeholder="County / State *" className="border p-2 rounded" required />
          <input type="text" placeholder="Post Code *" className="border p-2 rounded" required />
          <input type="text" placeholder="Country *" className="border p-2 rounded md:col-span-2" required />
        </form>
      </div>

      {/* === Continue to Payment === */}
      <button
        className="w-full bg-black text-white py-3 rounded-lg font-medium"
        disabled={!isAgeVerified}
      >
        Continue to Payment
      </button>

      {/* === Back Home === */}
      <div className="flex justify-center mt-6">
        <Link href="/" className="secondary">
          ← Back Home
        </Link>
      </div>
    </div>
  );
}
