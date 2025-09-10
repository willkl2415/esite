"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const points = subtotal; // placeholder: 1 point = £1 spent

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="mb-6">Your basket is empty.</p>
          <Link href="/category" className="primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Order Summary */}
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

          {/* Info Banners */}
          <div className="bg-gray-100 border rounded-lg p-4 mb-6">
            <p className="text-sm">
              Free Delivery on orders over <strong>£xx</strong>
            </p>
            <p className="text-sm">
              Earn <strong>{points}</strong> loyalty points with this order.
            </p>
          </div>

          {/* Account Prompt */}
          <div className="border rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold mb-2">Account Required</h2>
            <p className="text-sm text-gray-600 mb-4">
              Please log in or create an account to complete your purchase.
            </p>
            <div className="flex gap-4">
              <Link href="/account/login" className="secondary">
                Log In
              </Link>
              <Link href="/account/register" className="primary">
                Create Account
              </Link>
            </div>
          </div>

          {/* Payment CTA */}
          <button className="w-full bg-black text-white py-3 rounded-lg font-medium">
            Continue to Payment
          </button>
        </>
      )}
    </div>
  );
}
