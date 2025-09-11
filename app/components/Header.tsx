"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Cigar Manor
        </Link>

        {/* Right section */}
        <div className="flex items-center gap-6 relative">
          {/* Account Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 text-sm font-medium hover:underline"
            >
              My Account
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg border rounded-lg p-6 z-50">
                <h3 className="text-lg font-semibold mb-4">
                  Log in to your account
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Password</label>
                    <input
                      type="password"
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" /> Stay signed in?
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Sign In
                  </button>
                </form>
                <div className="mt-4 text-sm">
                  <Link href="/account" className="block hover:underline">
                    Create an account
                  </Link>
                  <Link href="/account" className="block hover:underline">
                    I've Forgotten My Password
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link href="/cart" className="text-sm font-medium hover:underline">
            Cart £0.00
          </Link>
        </div>
      </div>
    </header>
  );
}
