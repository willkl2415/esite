"use client"; // ✅ Client so useEffect works

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import {
  UserIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ for search redirect
import { siteMetadata } from "./metadata";
import { CartProvider, useCart } from "./context/CartContext";
import { SearchProvider, useSearch } from "./context/SearchContext"; // ✅ added

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Header now uses useSearch for query
function Header() {
  const { cart } = useCart();
  const { query, setQuery } = useSearch(); // ✅ connected to SearchContext
  const router = useRouter(); // ✅ redirect

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push("/category"); // ✅ send user to category page
    }
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow">
      <div className="grid grid-cols-3 items-center px-6 py-2.5">
        {/* Left: Search */}
        <div className="flex justify-start">
          <div className="relative w-64">
            <MagnifyingGlassIcon className="absolute left-3 top-2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)} // ✅ live updates SearchContext
              onKeyDown={handleKeyDown} // ✅ press Enter to search
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/cigar-manor.png"
              alt="Cigar Manor Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Right: Account / Cart / Language */}
        <div className="flex justify-end items-center space-x-4">
          <Link href="/account" className="flex items-center space-x-1">
            <UserIcon className="w-[18px] h-[18px]" />
            <span className="hidden md:inline">My Account</span>
          </Link>

          {/* ✅ Cart with badge */}
          <Link href="/cart" className="relative flex items-center space-x-1">
            <div className="relative">
              <ShoppingCartIcon className="w-[20px] h-[20px]" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </div>
            <span className="hidden md:inline font-medium">
              {itemCount > 0 ? `£${total.toFixed(2)}` : "£0.00"}
            </span>
          </Link>

          <div id="google_translate_element" />
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-white border-t">
        <ul className="flex justify-center space-x-6 py-3 text-sm font-medium text-black">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/history">History</Link></li>
          <li><Link href="/category">Cigars A–Z</Link></li>
          <li><Link href="/hand-rolling">Tobacco</Link></li> {/* ✅ New menu item */}
          <li><Link href="/accessories">Accessories</Link></li>
          <li><Link href="/gifts">Gifts</Link></li>
          <li><Link href="/promotions">Promotions</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    const interval = setInterval(() => {
      document
        .querySelectorAll(
          ".goog-logo-link, .goog-te-gadget span, .goog-te-banner-frame, #goog-gt-tt, .goog-te-balloon-frame"
        )
        .forEach((el) => ((el as HTMLElement).style.display = "none"));

      const iframe = document.querySelector<HTMLIFrameElement>(
        "iframe.goog-te-menu-frame"
      );
      if (iframe && iframe.contentDocument) {
        const unwanted = iframe.contentDocument.querySelectorAll(
          ".goog-logo-link, .goog-te-banner-frame, #goog-gt-tt, .goog-te-balloon-frame"
        );
        unwanted.forEach((el) => ((el as HTMLElement).style.display = "none"));

        const menu = iframe.contentDocument.querySelector(".goog-te-menu2");
        if (menu) {
          (menu as HTMLElement).style.width = "220px";
          (menu as HTMLElement).style.minWidth = "200px";
          (menu as HTMLElement).style.maxWidth = "240px";
          (menu as HTMLElement).style.background = "#fff";
          (menu as HTMLElement).style.border = "1px solid #000100";
          (menu as HTMLElement).style.borderRadius = "8px";
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{siteMetadata.title as string}</title>
        <meta name="description" content={siteMetadata.description as string} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CartProvider>
          <SearchProvider>
            <Header />
            <main>{children}</main>

            {/* UNIVERSAL BACK HOME BUTTON */}
            <div className="flex justify-center my-6">
              <Link href="/" className="primary">
                Back Home
              </Link>
            </div>

            {/* FOOTER */}
            <footer className="bg-gray-100 text-black mt-6">
              <div className="max-w-7xl mx-auto px-4 py-1 grid md:grid-cols-3 gap-2 items-center">
                <div className="flex justify-start space-x-2">
                  <Link href="#"><Image src="/icons/x.svg" alt="X" width={24} height={24} /></Link>
                  <Link href="#"><Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} /></Link>
                  <Link href="#"><Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} /></Link>
                  <Link href="#"><Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} /></Link>
                  <Link href="#"><Image src="/icons/tiktok.svg" alt="TikTok" width={24} height={24} /></Link>
                </div>
                <div className="text-center text-xs">
                  <p>© 2025 Cigar Manor</p>
                  <p className="italic">"Where Connoisseurs of Cool Meet Pleasure"</p>
                </div>
                <div className="flex justify-end space-x-3 text-xs">
                  <Link href="/help">Help</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
            </footer>
          </SearchProvider>
        </CartProvider>

        {/* GOOGLE TRANSLATE SCRIPT */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  {pageLanguage: 'en'},
                  'google_translate_element'
                );
              }
            `,
          }}
        />
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
      </body>
    </html>
  );
}
