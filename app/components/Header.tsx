"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Search } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Cigar Manor
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/category" className="hover:underline">
            Cigars
          </Link>
          <Link href="/tobacco" className="hover:underline">
            Tobacco
          </Link>
          <Link href="/accessories" className="hover:underline">
            Accessories
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hover:text-gray-700">
            <Search size={20} />
          </button>
          <Link href="/cart" aria-label="Cart" className="hover:text-gray-700">
            <ShoppingCart size={20} />
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden px-2 py-1 rounded hover:bg-gray-100"
            onClick={() => setMenuOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t px-6 py-4 space-y-3 text-sm font-medium">
          <Link href="/category" className="block">
            Cigars
          </Link>
          <Link href="/tobacco" className="block">
            Tobacco
          </Link>
          <Link href="/accessories" className="block">
            Accessories
          </Link>
          <Link href="/about" className="block">
            About
          </Link>
        </nav>
      )}
    </header>
  );
}
