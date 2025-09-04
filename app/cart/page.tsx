"use client";

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
        <p className="text-gray-600">Your basket is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-6 border-b pb-4">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-[#ff9800] font-semibold">£{item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <label>Qty:</label>
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
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
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 font-medium hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center pt-6">
            <h2 className="text-2xl font-bold">Total: £{total.toFixed(2)}</h2>
            <Link
              href="/checkout"
              className="bg-[#ff9800] text-white px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-[#ff9800] transition"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
