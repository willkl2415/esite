"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "./metadata";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";
import Link from "next/link";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AgeGate from "./components/AgeGate"; // ✅ Added AgeGate

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{siteMetadata.title as string}</title>
        <meta name="description" content={siteMetadata.description as string} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CartProvider>
          <SearchProvider>
            {/* 🔒 Age Restriction Overlay */}
            <AgeGate />

            {/* Main Layout */}
            <Header />
            <NavBar />

            <main>{children}</main>

            <div className="flex justify-center my-6">
              <Link href="/" className="primary">Back Home</Link>
            </div>

            <Footer />
          </SearchProvider>
        </CartProvider>
      </body>
    </html>
  );
}
