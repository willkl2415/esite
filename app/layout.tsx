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
import LanguageSwitcher from "./language-switcher";
import { labels } from "./dictionary";

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

function getLang(): string {
  if (typeof window !== "undefined") {
    return new URLSearchParams(window.location.search).get("lang") || "en";
  }
  return "en";
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
    { label: t.blog, href: "/blog" },
  ];

  return (
    <html lang={lang}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* HEADER */}
        <header className="border-b">
          {/* Top row */}
          <div className="flex items-center justify-between px-6 py-3 bg-white">
            {/* Search */}
            <div className="relative w-1/3 max-w-sm">
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
            </div>

            {/* Logo */}
            <div className="flex justify-center w-1/3">
              <Link href="/">
                <Image
                  src="/cigar-manor.png"
                  alt="Cigar Manor"
                  width={120}
                  height={120}
                />
              </Link>
            </div>

            {/* Account + Cart */}
            <div className="flex items-center justify-end w-1/3 space-x-6">
              <div className="flex items-center space-x-2">
                <UserIcon className="w-6 h-6" />
                <span>{t.account}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShoppingCartIcon className="w-6 h-6" />
                <span>{t.cartTotal}</span>
              </div>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Nav row */}
          <nav className="bg-[#ff9800]">
            <ul className="flex justify-center space-x-8 py-3 text-sm font-medium text-black">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={`${item.href}?lang=${lang}`}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* MAIN */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-[#ff9800] text-black mt-16">
          <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 items-center">
            {/* Left: copyright */}
            <div className="text-sm italic">
              © 2025 Cigar Manor — &quot;{t.footerTagline}&quot;
            </div>

            {/* Center: socials */}
            <div className="flex justify-center space-x-6">
              <Link href="#">
                <Image
                  src="/icons/x.svg"
                  alt="X"
                  width={24}
                  height={24}
                  className="hover:opacity-70 transition"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="hover:opacity-70 transition"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="hover:opacity-70 transition"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="hover:opacity-70 transition"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/tiktok.svg"
                  alt="TikTok"
                  width={24}
                  height={24}
                  className="hover:opacity-70 transition"
                />
              </Link>
            </div>

            {/* Right: links */}
            <div className="flex justify-end space-x-6 text-sm">
              <Link href="#">{t.help}</Link>
              <Link href="#">{t.contact}</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
