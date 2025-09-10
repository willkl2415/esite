"use client";

import Link from "next/link";
import Image from "next/image";
import {
  UserIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";
import LanguageSwitcher from "../language-switcher";

function getLang(): string {
  if (typeof window !== "undefined") {
    return new URLSearchParams(window.location.search).get("lang") || "en";
  }
  return "en";
}

export default function Header() {
  const router = useRouter();
  const { cart } = useCart();
  const { query, setQuery } = useSearch();
  const lang = getLang();

  const itemCount = cart.reduce((n, i) => n + i.quantity, 0);
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") router.push(`/category?lang=${lang}`);
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center gap-4 px-6 py-3">
        {/* Left: Search */}
        <div className="flex justify-start">
          <div className="relative w-full max-w-md">
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center">
          <Link href={`/?lang=${lang}`} className="flex items-center">
            <Image src="/cigar-manor.png" alt="Cigar Manor" width={80} height={80} />
          </Link>
        </div>

        {/* Right: Language / Account / Cart */}
        <div className="flex justify-end items-center space-x-4">
          {/* Single language control only */}
          <LanguageSwitcher />

          <Link href={`/account?lang=${lang}`} className="flex items-center space-x-1">
            <UserIcon className="w-5 h-5" />
            <span className="hidden md:inline">Account</span>
          </Link>

          <Link href={`/cart?lang=${lang}`} className="relative flex items-center space-x-1">
            <div className="relative">
              <ShoppingCartIcon className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </div>
            <span className="hidden md:inline font-medium">
              {itemCount > 0 ? `£${total.toFixed(2)}` : "£0.00"}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
