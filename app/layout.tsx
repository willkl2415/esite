import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import {
  UserIcon,
  ShoppingCartIcon,
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
    { label: t.about, href: "/about" },
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
        <header>
          <nav className="flex items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Logo" width={60} height={60} />
            </Link>
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={`${item.href}?lang=${lang}`}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
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
