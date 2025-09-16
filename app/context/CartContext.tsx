"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { products } from "@/app/data/products";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string;
};

type AddToCartInput = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: AddToCartInput) => void;
  removeFromCart: (id: string, variant?: string) => void;
  updateQuantity: (id: string, quantity: number, variant?: string) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);
const STORAGE_KEY = "cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCart(JSON.parse(raw));
    } catch {}
  }, []);

  // persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const addToCart = (payload: AddToCartInput) => {
    const base = products.find(p => p.id === payload.id);
    if (!base) return;

    setCart(prev => {
      const idx = prev.findIndex(i => i.id === payload.id && i.variant === payload.variant);
      if (idx !== -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + payload.quantity };
        return next;
      }
      return [...prev, {
        id: payload.id,
        name: payload.name ?? (base as any).name,
        price: typeof payload.price === "number" ? payload.price : Number((base as any).price) || 0,
        image: payload.image ?? (base as any).image,
        quantity: payload.quantity,
        variant: payload.variant
      }];
    });
  };

  const removeFromCart = (id: string, variant?: string) => {
    setCart(prev => prev.filter(i => !(i.id === id && i.variant === variant)));
  };

  const updateQuantity = (id: string, quantity: number, variant?: string) => {
    setCart(prev => prev.map(i => (i.id === id && i.variant === variant) ? { ...i, quantity } : i));
  };

  const clearCart = () => setCart([]);

  const itemCount = useMemo(() => cart.reduce((n, i) => n + i.quantity, 0), [cart]);
  const subtotal = useMemo(() => cart.reduce((s, i) => s + i.price * i.quantity, 0), [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, itemCount, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
