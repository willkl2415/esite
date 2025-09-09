/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "esite — Liquid Glass",
  description: "Cigar Manor – Where Cigars Come Alive",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {/* ✅ Global Header */}
        <Header />

        {/* ✅ Page content */}
        <main className="flex-1">{children}</main>

        {/* ✅ Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
