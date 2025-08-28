"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <Link href="/" className="text-xl font-bold">
        Cigar Manor
      </Link>
      <nav className="flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/history">History</Link>
      </nav>
    </header>
  );
}
