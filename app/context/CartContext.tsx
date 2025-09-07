"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { products } from "@/app/data/products";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string; // ✅ New: for tobacco weights/sizes
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (
    id: string,
    quantity: number,
    variant?: string,
    priceOverride?: number
  ) => void;
  removeFromCart: (id: string, variant?: string) => void;
  updateQuantity: (id: string, quantity: number, variant?: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (
    id: string,
    quantity: number,
    variant?: string,
    priceOverride?: number
  ) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === id && item.variant === variant
      );

      if (existing) {
        // ✅ If same product + same variant exists → increase quantity
        return prev.map((item) =>
          item.id === id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      // ✅ Otherwise add a new line item
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price:
            typeof priceOverride === "number"
              ? priceOverride
              : (product.price as number),
          image: product.image,
          quantity,
          variant,
        },
      ];
    });
  };

  const removeFromCart = (id: string, variant?: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.variant === variant)
      )
    );
  };

  const updateQuantity = (id: string, quantity: number, variant?: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
