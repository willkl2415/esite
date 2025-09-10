"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function getLang(): string {
  if (typeof window !== "undefined") {
    return new URLSearchParams(window.location.search).get("lang") || "en";
  }
  return "en";
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const lang = getLang();

  const items = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about-us" },
    { label: "HISTORY", href: "/history" },
    { label: "A–Z CIGARS", href: "/category" },        // existing route for A–Z
    { label: "TOBACCO", href: "/hand-rolling" },       // existing route for tobacco
    { label: "ACCESSORIES", href: "/accessories" },
    { label: "GIFTS", href: "/gifts" },
    { label: "PROMOTIONS", href: "/promotions" },
    { label: "SALE", href: "/sale", className: "text-red-600 font-semibold" },
    { label: "LOYALTY", href: "/loyalty" },
    { label: "JOURNAL", href: "/journal" },
    { label: "MY LOCKER", href: "/my-locker" },
  ];

  return (
    <div className="bg-white border-b">
      <nav className="max-w-7xl mx-auto px-6">
        <ul
          className="
            flex items-center justify-center gap-6 py-3
            text-[13px] md:text-sm font-semibold text-gray-900
            whitespace-nowrap
          "
        >
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={`${item.href}?lang=${lang}`}
                className={item.className || ""}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* HELP & INFORMATION with dropdown */}
          <li className="relative">
            <button
              onClick={() => setOpen((s) => !s)}
              className="flex items-center gap-1"
              aria-haspopup="menu"
              aria-expanded={open}
            >
              <span>HELP &amp; INFORMATION</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            {open && (
              <div
                className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded border bg-white shadow text-sm"
                onMouseLeave={() => setOpen(false)}
              >
                <Link href={`/help/shipping?lang=${lang}`} className="block px-3 py-2 hover:bg-gray-100">
                  Shipping
                </Link>
                <Link href={`/help/returns?lang=${lang}`} className="block px-3 py-2 hover:bg-gray-100">
                  Returns
                </Link>
                <Link href={`/help/faq?lang=${lang}`} className="block px-3 py-2 hover:bg-gray-100">
                  FAQ
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
