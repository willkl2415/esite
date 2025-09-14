"use client";

import { useCart } from "@/app/context/CartContext";
import { products } from "@/app/data/products";

export default function MyLockerPage() {
  const { cart, addToCart, removeFromCart } = useCart();

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
    removeFromCart(id);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">My Locker</h1>

      {cart.length === 0 ? (
        <p>Your locker is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>{item.name}</span>
              <div className="flex gap-3">
                <button
                  onClick={() => handleMoveToCart(item.id)}
                  className="primary"
                >
                  Move to Cart
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="secondary"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
