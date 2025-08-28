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
        <header className="bg-white border-b">
          {/* Top row */}
          <div className="flex items-center justify-between px-6 py-3">
            {/* Search */}
            <div className="relative w-full max-w-sm">
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="pl-10 pr-4 py-2 border rounded-lg w-full"
              />
            </div>

            {/* Logo - truly centered */}
            <div className="flex justify-center flex-1">
              <Link href="/" className="flex items-center">
                <Image
                  src="/cigar-manor.png"
                  alt="Cigar Manor Logo"
                  width={100}
                  height={100}
                />
              </Link>
            </div>

            {/* Account + Cart + Language */}
            <div className="flex items-center space-x-4">
              <Link href="/account" className="flex items-center space-x-1">
                <UserIcon className="w-6 h-6" />
                <span className="hidden md:inline">{t.myAccount}</span>
              </Link>
              <Link href="/cart" className="flex items-center space-x-1">
                <ShoppingCartIcon className="w-6 h-6" />
                <span className="hidden md:inline">£0.00</span>
              </Link>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Sticky Nav Bar */}
          <nav className="bg-[#ff9800] sticky top-0 z-50">
            <ul className="flex justify-center space-x-6 py-3">
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
        <footer className="bg-[#ff9800] text-center py-6 mt-10">
          <p className="text-sm text-black font-medium">© 2025 Cigar Manor</p>
          <p className="text-sm text-black italic">
            &quot;{t.footerTagline}&quot;
          </p>

          {/* Social icons */}
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="#">
              <Image src="/icons/x.svg" alt="X" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src="/icons/tiktok.svg" alt="TikTok" width={24} height={24} />
            </Link>
          </div>

          {/* Help/Contact links */}
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/help">{t.help}</Link>
            <Link href="/contact">{t.contact}</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
