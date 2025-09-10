"use client";

import Link from "next/link";
import Image from "next/image";
import { UserIcon, ShoppingCartIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/cigar-manor.png" alt="Cigar Manor Logo" width={80} height={80} />
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/history">History</Link>
          <Link href="/awarded-cigars">Awarded Cigars</Link>
          <Link href="/new-world-cigars">New World Cigars</Link>
          <Link href="/machine-made-cigars">Machine-Made</Link>
          <Link href="/flavoured-cigars">Flavoured</Link>
          <Link href="/samplers">Samplers</Link>
          <Link href="/accessories">Accessories</Link>
          <Link href="/gifts">Gifts</Link>
          <Link href="/promotions">Promotions</Link>
          <Link href="/sale" className="text-red-600 font-semibold">Sale</Link>
          <Link href="/loyalty">Loyalty</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/my-locker">My Locker</Link>

          {/* Help Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="flex items-center space-x-1"
            >
              <span>Help</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            {showHelp && (
              <div className="absolute top-6 left-0 bg-white border shadow rounded w-40 text-sm p-2">
                <Link href="/help/shipping" className="block px-2 py-1 hover:bg-gray-100">Shipping</Link>
                <Link href="/help/returns" className="block px-2 py-1 hover:bg-gray-100">Returns</Link>
                <Link href="/help/faq" className="block px-2 py-1 hover:bg-gray-100">FAQ</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <Link href="/account" className="flex items-center space-x-1">
            <UserIcon className="w-5 h-5" />
            <span className="hidden md:inline">Account</span>
          </Link>
          <Link href="/cart" className="flex items-center space-x-1">
            <ShoppingCartIcon className="w-5 h-5" />
            <span className="hidden md:inline">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
