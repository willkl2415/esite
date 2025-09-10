"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import Link from "next/link";
import { siteMetadata } from "./metadata";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    const id = setInterval(() => {
      document
        .querySelectorAll(".goog-logo-link, .goog-te-gadget span, .goog-te-banner-frame, #goog-gt-tt, .goog-te-balloon-frame")
        .forEach((el) => ((el as HTMLElement).style.display = "none"));
    }, 1000);
    return () => clearInterval(id);
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
            <NavBar />

            <main>{children}</main>

            {/* Universal Back Home Button */}
            <div className="flex justify-center my-6">
              <Link href="/" className="primary">Back Home</Link>
            </div>

            <Footer />
          </SearchProvider>
        </CartProvider>

        {/* Google Translate */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
              }
            `,
          }}
        />
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" />
      </body>
    </html>
  );
}
