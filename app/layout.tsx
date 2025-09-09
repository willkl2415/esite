/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "esite — Liquid Glass",
  description: "Universal Liquid Glass design shell",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        {/* The header is rendered by Header.tsx inside pages or here globally if you prefer */}
        {children}
      </body>
    </html>
  );
}
