import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import {
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import LanguageSwitcher from "./language-switcher"; // ✅ new client component

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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <nav className="flex items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Logo" width={60} height={60} />
            </Link>
            <ul className="flex space-x-6">
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/about">ABOUT US</Link></li>
              <li><Link href="/history">HISTORY</Link></li>
              <li><Link href="/awarded-cigars">AWARDED CIGARS</Link></li>
              <li><Link href="/new-world-cigars">NEW WORLD CIGARS</Link></li>
              <li><Link href="/machine-made-cigars">MACHINE-MADE CIGARS</Link></li>
              <li><Link href="/flavoured-cigars">FLAVOURED CIGARS</Link></li>
              <li><Link href="/samplers">SAMPLERS</Link></li>
              <li><Link href="/accessories">ACCESSORIES</Link></li>
              <li><Link href="/gifts">GIFTS</Link></li>
              <li><Link href="/promotions">PROMOTIONS</Link></li>
              <li><Link href="/blog">BLOG</Link></li>
            </ul>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher /> {/* ✅ safe client-side only */}
              <UserIcon className="w-6 h-6" />
              <ShoppingCartIcon className="w-6 h-6" />
            </div>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
