"use client";

import Link from "next/link";

export default function HelpPage() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">
        Help & Information
      </h1>

      {/* Policies Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-[#ff9800]">Policies</h2>
        <ul className="space-y-2 text-lg">
          <li>
            <Link
              href="/website-terms"
              className="text-black hover:underline hover:text-[#ff9800]"
            >
              Website Terms
            </Link>
          </li>
          <li>
            <Link
              href="/refunds-returns"
              className="text-black hover:underline hover:text-[#ff9800]"
            >
              Refunds & Returns
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="text-black hover:underline hover:text-[#ff9800]"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      {/* Account Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-[#ff9800]">Account</h2>
        <ul className="space-y-2 text-lg">
          <li>
            <Link
              href="/account"
              className="text-black hover:underline hover:text-[#ff9800]"
            >
              My Account
            </Link>
          </li>
        </ul>
      </div>

      {/* Resources Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#ff9800]">Resources</h2>
        <ul className="space-y-2 text-lg">
          <li>
            <Link
              href="/help/lexicon"
              className="text-black hover:underline hover:text-[#ff9800]"
            >
              Cigar Manor Lexicon
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
