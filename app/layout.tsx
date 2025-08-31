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
import { useEffect } from "react";

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
  description: "Where Connoisseurs of Cool Meet Pleasure",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    const interval = setInterval(() => {
      const iframe = document.querySelector<HTMLIFrameElement>(
        "iframe.goog-te-menu-frame"
      );
      if (iframe && iframe.contentDocument) {
        const unwanted = iframe.contentDocument.querySelectorAll(
          ".goog-logo-link, .goog-te-gadget span, .goog-te-banner-frame, #goog-gt-tt, .goog-te-balloon-frame"
        );
        unwanted.forEach((el) => (el as HTMLElement).style.display = "none");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* HEADER */}
        <header className="bg-white border-b sticky top-0 z-50 shadow">
          <div className="grid grid-cols-3 items-center px-6 py-2.5">
            {/* Left: Search */}
            <div className="flex justify-start">
              <div className="relative w-64">
                <MagnifyingGlassIcon className="absolute left-3 top-2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
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
              <Link href="/cart" className="flex items-center space-x-1">
                <ShoppingCartIcon className="w-[18px] h-[18px]" />
                <span className="hidden md:inline">£0.00</span>
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
              <li><Link href="/awarded-cigars">Awarded Cigars</Link></li>
              <li><Link href="/new-world-cigars">New World Cigars</Link></li>
              <li><Link href="/machine-made-cigars">Machine-Made Cigars</Link></li>
              <li><Link href="/flavoured-cigars">Flavoured Cigars</Link></li>
              <li><Link href="/samplers">Samplers</Link></li>
              <li><Link href="/accessories">Accessories</Link></li>
              <li><Link href="/gifts">Gifts</Link></li>
              <li><Link href="/promotions">Promotions</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </nav>
        </header>

        {/* MAIN */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-[#ff9800] text-black mt-6">
          <div className="max-w-7xl mx-auto px-4 py-1 grid md:grid-cols-3 gap-2 items-center">
            {/* Left: Socials */}
            <div className="flex justify-start space-x-2">
              <Link href="#"><Image src="/icons/x.svg" alt="X" width={24} height={24} /></Link>
              <Link href="#"><Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} /></Link>
              <Link href="#"><Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} /></Link>
              <Link href="#"><Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} /></Link>
              <Link href="#"><Image src="/icons/tiktok.svg" alt="TikTok" width={24} height={24} /></Link>
            </div>

            {/* Center: Copyright */}
            <div className="text-center text-xs">
              <p>© 2025 Cigar Manor</p>
              <p className="italic">"Where Connoisseurs of Cool Meet Pleasure"</p>
            </div>

            {/* Right: Links */}
            <div className="flex justify-end space-x-3 text-xs">
              <Link href="/help">Help</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </footer>

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

        {/* CUSTOM CSS TO HIDE BRANDING */}
        <style>{`
          .goog-logo-link,
          .goog-te-gadget span,
          .goog-te-gadget-simple img,
          .goog-te-gadget div > span {
            display: none !important;
          }

          /* Force-hide "Powered by" */
          .goog-te-gadget {
            font-size: 0 !important;
          }
          .goog-te-gadget * {
            font-size: 0 !important;
          }

          /* Keep dropdown visible + styled */
          .goog-te-gadget .goog-te-combo {
            font-size: 14px !important;
            font-weight: 600 !important;
            color: #ff9800 !important;
            background: #000100 !important;
            border-radius: 8px !important;
            padding: 6px 12px !important;
            border: none !important;
            cursor: pointer !important;
          }
        `}</style>
      </body>
    </html>
  );
}
