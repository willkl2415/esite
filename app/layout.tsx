import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import {
  HeartIcon,
  UserIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

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
    { label: "HOME", dropdown: false },
    { label: "HISTORY", dropdown: false },
    { label: "AWARDED CIGARS", dropdown: true },
    { label: "NEW WORLD CIGARS", dropdown: true },
    { label: "MACHINE-MADE CIGARS", dropdown: true },
    { label: "FLAVOURED CIGARS", dropdown: true },
    { label: "SAMPLERS", dropdown: true },
    { label: "ACCESSORIES", dropdown: true },
    { label: "GIFTS", dropdown: false },
    { label: "PROMOTIONS", dropdown: false },
    { label: "BLOG", dropdown: false },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-light text-secondary antialiased`}
      >
        {/* === Top Header Row === */}
        <div className="flex justify-between items-center px-8 py-4 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          {/* Left: Search with Icon */}
          <div className="flex items-center border rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-primary w-64">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 outline-none text-sm bg-transparent"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-accent cursor-pointer hover:text-primary" />
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
            <div className="flex items-center gap-1 hover:text-primary cursor-pointer transition">
              <HeartIcon className="h-5 w-5" />
              <span className="hidden md:inline">Wishlist</span>
            </div>
            <div className="flex items-center gap-1 hover:text-primary cursor-pointer transition">
              <UserIcon className="h-5 w-5" />
              <span className="hidden md:inline">My Account</span>
            </div>
            <div className="flex items-center gap-1 hover:text-primary cursor-pointer transition">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="hidden md:inline">£0.00</span>
            </div>
          </div>
        </div>

        {/* === Navigation Row === */}
        <nav className="flex flex-wrap justify-center gap-8 px-6 py-3 border-b text-sm font-medium bg-white">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`/${item.label.toLowerCase().replace(/ /g, "-")}`}
              className="flex items-center gap-1 text-secondary hover:text-primary transition"
            >
              {item.label}
              {item.dropdown && <span className="text-xs">▼</span>}
            </a>
          ))}
        </nav>

        {/* === Page Content === */}
        <main className="flex-1">{children}</main>

        {/* === Footer === */}
        <footer className="p-8 bg-secondary text-light text-center text-sm">
          <p>&copy; 2025 Cigar Manor</p>
        </footer>
      </body>
    </html>
  );
}
