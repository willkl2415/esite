"use client";

import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";

export default function MyLockerPage() {
  const { addToCart } = useCart();
  const locker = JSON.parse(localStorage.getItem("locker") || "[]");

  const handleMoveToCart = (id: string) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image,
        quantity: 1,
      });
      handleRemove(id);
    }
  };

  const handleRemove = (id: string) => {
    const updated = locker.filter((lid: string) => lid !== id);
    localStorage.setItem("locker", JSON.stringify(updated));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">My Locker</h1>
      {locker.length === 0 ? (
        <p className="text-gray-600">Your locker is empty.</p>
      ) : (
        <ul className="space-y-4">
          {locker.map((id: string) => {
            const p = products.find((pr) => pr.id === id);
            if (!p) return null;
            return (
              <li key={id} className="flex items-center justify-between border-b pb-4">
                <span>{p.name}</span>
                <div className="flex gap-3">
                  <button onClick={() => handleMoveToCart(id)} className="primary">
                    Move to Cart
                  </button>
                  <button onClick={() => handleRemove(id)} className="secondary">
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
