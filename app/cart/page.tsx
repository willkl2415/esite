"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { products } from "@/app/data/products";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Upsell sections
  const upsell = products
    .filter((p) => !cart.some((c) => c.id === p.id))
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const deals = products.filter((p) => p.category === "promotions").slice(0, 3);
  const accessories = products
    .filter((p) => p.category === "accessories")
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Basket</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="mb-6">Your basket is empty.</p>
          <Link href="/category" className="primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-6 mb-10">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity} × £{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-medium">
                    £{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Info + Checkout */}
          <div className="border-t pt-6 mb-10">
            <p className="text-gray-600 mb-2">
              Free Delivery on orders over <strong>£xx</strong>
            </p>
            <p className="text-lg font-semibold mb-4">
              Subtotal: £{subtotal.toFixed(2)}
            </p>
            <Link href="/checkout" className="primary">
              Proceed to Checkout
            </Link>
          </div>

          {/* Upsells */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">You may also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upsell.map((u) => (
                <div
                  key={u.id}
                  className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                >
                  <Image
                    src={u.image}
                    alt={u.name}
                    width={250}
                    height={350}
                    className="mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold">{u.name}</h3>
                  <p className="text-sm text-gray-500">£{u.price.toFixed(2)}</p>
                  <Link
                    href={`/product/${u.id}`}
                    className="mt-3 inline-block primary"
                  >
                    View Product
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Unmissable Deals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deals.map((d) => (
                <div
                  key={d.id}
                  className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                >
                  <Image
                    src={d.image}
                    alt={d.name}
                    width={250}
                    height={350}
                    className="mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold">{d.name}</h3>
                  <p className="text-sm text-gray-500">£{d.price.toFixed(2)}</p>
                  <Link
                    href={`/product/${d.id}`}
                    className="mt-3 inline-block primary"
                  >
                    View Deal
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Don’t forget…</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {accessories.map((a) => (
                <div
                  key={a.id}
                  className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                >
                  <Image
                    src={a.image}
                    alt={a.name}
                    width={250}
                    height={350}
                    className="mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold">{a.name}</h3>
                  <p className="text-sm text-gray-500">£{a.price.toFixed(2)}</p>
                  <Link
                    href={`/product/${a.id}`}
                    className="mt-3 inline-block primary"
                  >
                    View Product
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
