"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-6">
            Your basket is empty. Add some products before checking out.
          </p>
          <Link href="/category" className="primary">
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          {/* Order Summary */}
          <div className="space-y-6 mb-10">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.variant || "default"}`}
                className="flex items-center gap-6 border-b pb-4"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">
                    {item.name}
                    {item.variant && (
                      <span className="ml-2 text-gray-600 text-base font-normal">
                        ({item.variant})
                      </span>
                    )}
                  </h2>
                  <p className="text-gray-600">
                    Qty: {item.quantity} × £{item.price.toFixed(2)}
                  </p>
                </div>
                <p className="font-semibold">
                  £{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Summary + Next Steps */}
          <div className="flex justify-between items-center pt-6 border-t">
            <h2 className="text-2xl font-bold">Total: £{total.toFixed(2)}</h2>
            <div className="flex gap-4">
              <Link href="/cart" className="secondary">
                ← Back to Basket
              </Link>
              <button className="primary">
                Proceed to Payment
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
