'use client';
export const dynamic = 'force-dynamic';

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Your Basket</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-6">Your basket is empty.</p>
          <Link href="/category" className="primary">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.variant || "default"}`}
              className="flex items-center gap-6 border-b pb-4"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">
                  {item.name}
                  {item.variant && (
                    <span className="ml-2 text-gray-600 text-base font-normal">
                      ({item.variant})
                    </span>
                  )}
                </h2>
                <p className="font-semibold">£{item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <label
                    htmlFor={`qty-${item.id}-${item.variant || "default"}`}
                    className="font-medium"
                  >
                    Qty:
                  </label>
                  <select
                    id={`qty-${item.id}-${item.variant || "default"}`}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(
                        item.id,
                        Number(e.target.value),
                        item.variant
                      )
                    }
                    className="border rounded px-2 py-1"
                  >
                    {[...Array(10).keys()].map((n) => (
                      <option key={n + 1} value={n + 1}>
                        {n + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id, item.variant)}
                className="danger"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Summary */}
          <div className="flex justify-between items-center pt-6">
            <h2 className="text-2xl font-bold">Total: £{total.toFixed(2)}</h2>
            <div className="flex gap-4">
              <Link href="/category" className="secondary">
                Continue Shopping
              </Link>
              <Link href="/checkout" className="primary">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
