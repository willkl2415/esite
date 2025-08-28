import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import {
  UserIcon,
  ShoppingCartIcon,
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

// ✅ Simple dictionary for languages
const labels: Record<string, Record<string, string>> = {
  en: {
    home: "HOME",
    about: "ABOUT US",
    history: "HISTORY",
    awarded: "AWARDED CIGARS",
    newWorld: "NEW WORLD CIGARS",
    machineMade: "MACHINE-MADE CIGARS",
    flavoured: "FLAVOURED CIGARS",
    samplers: "SAMPLERS",
    accessories: "ACCESSORIES",
    gifts: "GIFTS",
    promotions: "PROMOTIONS",
    blog: "BLOG",
  },
  es: {
    home: "INICIO",
    about: "SOBRE NOSOTROS",
    history: "HISTORIA",
    awarded: "PUROS PREMIADOS",
    newWorld: "PUROS DEL NUEVO MUNDO",
    machineMade: "PUROS DE MÁQUINA",
    flavoured: "PUROS SABORIZADOS",
    samplers: "MUESTRARIOS",
    accessories: "ACCESORIOS",
    gifts: "REGALOS",
    promotions: "PROMOCIONES",
    blog: "BLOG",
  },
  fr: {
    home: "ACCUEIL",
    about: "À PROPOS",
    history: "HISTOIRE",
    awarded: "CIGARES PRIMÉS",
    newWorld: "CIGARES DU NOUVEAU MONDE",
    machineMade: "CIGARES DE MACHINE",
    flavoured: "CIGARES AROMATISÉS",
    samplers: "ÉCHANTILLONS",
    accessories: "ACCESSOIRES",
    gifts: "CADEAUX",
    promotions: "PROMOTIONS",
    blog: "BLOG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ✅ Default to English, allow switching via URL query (?lang=es)
  const lang =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("lang") || "en"
      : "en";

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
              {/* ✅ Language Switcher */}
              <select
                defaultValue={lang}
                onChange={(e) => {
                  const newLang = e.target.value;
                  window.location.search = `?lang=${newLang}`;
                }}
                className="border px-2 py-1 rounded"
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
              </select>
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
