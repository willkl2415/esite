"use client";

import Link from "next/link";
import { useTranslation } from "../dictionary";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#ff9800] text-black mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center space-y-6">
        <p className="italic">
          © 2025 Cigar Manor — {t("footerTagline")}
        </p>

        {/* Socials */}
        <div className="flex justify-center space-x-6">
          <a href="#" aria-label="X" className="hover:underline">
            X
          </a>
          <a href="#" aria-label="Facebook" className="hover:underline">
            Facebook
          </a>
          <a href="#" aria-label="Instagram" className="hover:underline">
            Instagram
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:underline">
            LinkedIn
          </a>
        </div>

        {/* Help & Contact */}
        <div className="flex justify-center space-x-6">
          <Link href="/help" className="hover:underline">
            {t("help")}
          </Link>
          <Link href="/contact" className="hover:underline">
            {t("contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
