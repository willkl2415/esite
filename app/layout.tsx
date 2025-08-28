import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header"; // ✅ new client component

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
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about-us" },
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
        {/* ✅ Client header with search + icons + language switcher */}
        <Header />

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
            <p className="text-center font-medium">
              &copy; 2025 Cigar Manor —{" "}
              <em>&quot;Where Connoisseurs of Cool Meet Pleasure&quot;</em>
            </p>

            <div className="flex gap-6">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/x.svg" alt="X" width={28} height={28} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/facebook.svg" alt="Facebook" width={28} height={28} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/tiktok.svg" alt="TikTok" width={28} height={28} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={28} height={28} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/instagram.svg" alt="Instagram" width={28} height={28} />
              </a>
            </div>
          </div>

          <div className="absolute right-6 bottom-6 flex space-x-6">
            <Link href="/help" className="text-sm font-medium hover:underline">
              Help & Information
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
