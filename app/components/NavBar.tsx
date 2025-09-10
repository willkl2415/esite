"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { labels } from "../dictionary";

function getLang(): string {
  if (typeof window !== "undefined") {
    return new URLSearchParams(window.location.search).get("lang") || "en";
  }
  return "en";
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const lang = getLang();
  const t = labels[lang] || labels.en;

  const navItems = [
    { label: t.home, href: "/" },
    { label: t.about, href: "/about-us" },
    { label: t.history, href: "/history" },
    { label: t.awarded, href: "/awarded-cigars" },
    { label: t.newWorld, href: "/new-world-cigars" },
    { label: t.machineMade, href: "/machine-made-cigars" },
    { label: t.flavoured, href: "/flavoured-cigars" },
    { label: t.samplers, href: "/samplers" },
    { label: t.accessories, href: "/accessories" },
    { label: t.gifts, href: "/gifts" },
    { label: t.promotions, href: "/promotions" },

    // New additions
    { label: "Sale", href: "/sale", className: "text-red-600 font-semibold" },
    { label: "Loyalty", href: "/loyalty" },
    { label: "Journal", href: "/journal" },
    { label: "My Locker", href: "/my-locker" },
  ];

  return (
    <div className="bg-white border-b">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Scrollable list so it never wraps into two rows */}
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-900 overflow-x-auto whitespace-nowrap">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={`${item.href}?lang=${lang}`}
                className={item.className || ""}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Help dropdown at the end */}
          <li className="relative">
            <button
              onClick={() => setOpen((s) => !s)}
              className="flex items-center gap-1"
            >
              <span>{t.help || "Help"}</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            {open && (
              <div
                className="absolute left-0 mt-2 w-44 rounded border bg-white shadow text-sm"
                onMouseLeave={() => setOpen(false)}
              >
                <Link
                  href={`/help/shipping?lang=${lang}`}
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Shipping
                </Link>
                <Link
                  href={`/help/returns?lang=${lang}`}
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Returns
                </Link>
                <Link
                  href={`/help/faq?lang=${lang}`}
                  className="block px-3 py-2 hover:bg-gray-100"
                >
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
