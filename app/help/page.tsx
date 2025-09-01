"use client";

import Link from "next/link";

export default function HelpPage() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">
        Help & Information
      </h1>

      <div className="bg-white rounded-2xl shadow-md p-10 text-center">
        {/* Links List */}
        <ul className="space-y-6 text-xl font-bold">
          <li>
            <Link
              href="/website-terms"
              className="text-black hover:text-[#ff9800] transition"
            >
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link
              href="/refunds-returns"
              className="text-black hover:text-[#ff9800] transition"
            >
              Refunds & Returns
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="text-black hover:text-[#ff9800] transition"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/account"
              className="text-black hover:text-[#ff9800] transition"
            >
              My Account
            </Link>
          </li>
          <li>
            <Link
              href="/help/lexicon"
              className="text-black hover:text-[#ff9800] transition"
            >
              Cigar Lexicon
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
