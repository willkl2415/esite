import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import {
  UserIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cigar Manor",
  description: "Luxury Cigars & Lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { label: "HOME", href: "/" }, // ✅ root landing page
    { label: "ABOUT US", href: "/about-us" }, // 🔥 fixed path
    { label: "HISTORY", href: "/history" },
    { label: "AWARDED CIGARS", href: "/awarded-cigars", dropdown: true },
    { label: "NEW WORLD CIGARS", href: "/new-world-cigars", dropdown: true },
    { label: "MACHINE-MADE CIGARS", href: "/machine-made-cigars", dropdown: true },
    { label: "FLAVOURED CIGARS", href: "/flavoured-cigars", dropdown: true },
    { label: "SAMPLERS", href: "/samplers", dropdown: true },
    { label: "ACCESSORIES", href: "/accessories", dropdown: true },
    { label: "GIFTS", href: "/gifts", dropdown: true },
    { label: "PROMOTIONS", href: "/promotions", dropdown: true },
    { label: "BLOG", href: "/blog" },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white text-black`}
      >
        {/* === Top Header Row === */}
        <div className="flex justify-between items-center px-8 py-4 border-b bg-white sticky top-0 z-50">
          {/* Left: Search */}
          <div className="flex items-center border border-black rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-purple w-64">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 outline-none text-sm text-black"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-purple cursor-pointer hover:text-black" />
          </div>

          {/* Center: Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/cigar-manor.png"
              alt="Cigar Manor Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="/account"
              className="flex items-center gap-1 hover:text-purple cursor-pointer transition"
            >
              <UserIcon className="h-5 w-5" />
              <span className="hidden md:inline">My Account</span>
            </a>
            <div className="flex items-center gap-1 hover:text-purple cursor-pointer transition">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="hidden md:inline">£0.00</span>
            </div>
          </div>
        </div>

        {/* === Navigation Row === */}
        <nav className="flex flex-wrap justify-center gap-8 px-6 py-3 border-b text-sm font-medium bg-white">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-black hover:text-purple transition"
            >
              {item.label}
              {item.dropdown && <span className="text-xs">▼</span>}
            </Link>
          ))}
        </nav>

        {/* === Page Content === */}
        <main className="flex-1">{children}</main>

        {/* === Footer === */}
        <footer className="p-6 border-t text-sm bg-[#ff9800] text-black relative">
          <div className="flex flex-col items-center gap-4">
            {/* Copyright */}
            <p className="text-center font-medium">
              &copy; 2025 Cigar Manor — <em>"Where Connoisseurs of Cool Meet Pleasure"</em>
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <Image
                  src="/icons/x.svg"
                  alt="X"
                  width={28}
                  height={28}
                  className="hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  width={28}
                  height={28}
                  className="hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <Image
                  src="/icons/tiktok.svg"
                  alt="TikTok"
                  width={28}
                  height={28}
                  className="hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={28}
                  height={28}
                  className="hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={28}
                  height={28}
                  className="hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Footer Links (right corner) */}
          <div className="absolute right-6 bottom-6 flex space-x-6">
            <Link
              href="/help"
              className="text-sm font-medium hover:underline"
            >
              Help & Information
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:underline"
            >
              Contact
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
