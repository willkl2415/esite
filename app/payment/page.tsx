"use client";

import { useState } from "react";
import Link from "next/link";

export default function PaymentPage() {
  const [verified, setVerified] = useState(false);

  const handleYotiVerify = () => {
    // Stub for demo – in real setup this calls Yoti SDK
    alert("Yoti sandbox verification launched (stub).");
    setVerified(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <p className="text-gray-700 mb-2">Items: (Stubbed) Your basket here</p>
        <p className="text-gray-900 font-bold">Subtotal: £157.00</p>
      </div>

      {!verified ? (
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-2">Age Verification Required</h2>
          <p className="text-gray-700 mb-4">
            You must verify your age before continuing to payment.
          </p>
          <button
            onClick={handleYotiVerify}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Verify with Yoti
          </button>
        </div>
      ) : (
        <div className="bg-green-100 p-6 rounded-lg shadow-md mb-6">
          <p className="text-green-700 font-semibold">
            ✅ Age Verified – You may continue
          </p>
        </div>
      )}

      <button
        disabled={!verified}
        className={`w-full py-3 rounded text-white font-bold transition ${
          verified ? "bg-black hover:bg-gray-800" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Continue to Payment
      </button>

      <Link href="/cart" className="block mt-4 text-gray-600 hover:underline">
        ← Back to Basket
      </Link>
    </div>
  );
}
