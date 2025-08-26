"use client";

import Link from "next/link";

export default function HelpPage() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#ff9800]">
        Help & Information
      </h1>
      <ul className="space-y-4 text-lg">
        <li>
          <Link href="/website-terms" className="text-black hover:text-[#ff9800]">
            Website Terms
          </Link>
        </li>
        <li>
          <Link href="/refunds-returns" className="text-black hover:text-[#ff9800]">
            Refunds & Returns
          </Link>
        </li>
        <li>
          <Link href="/privacy-policy" className="text-black hover:text-[#ff9800]">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/account" className="text-black hover:text-[#ff9800]">
            My Account
          </Link>
        </li>
      </ul>
    </div>
  );
}
