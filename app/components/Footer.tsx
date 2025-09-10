"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10">
        {/* Why Shop */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Why Shop with Cigar Manor?</h2>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>✔ Premium Selection</li>
            <li>✔ Expert Curation</li>
            <li>✔ Community & Trust</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link href="/sale">Sale</Link></li>
            <li><Link href="/loyalty">Loyalty Club</Link></li>
            <li><Link href="/journal">Journal</Link></li>
            <li><Link href="/my-locker">My Locker</Link></li>
            <li><Link href="/help/shipping">Shipping</Link></li>
            <li><Link href="/help/returns">Returns</Link></li>
            <li><Link href="/help/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Join the Manor Society</h2>
          <p className="text-sm text-gray-700 mb-2">
            Sign up for exclusive offers & cigar news.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="border px-3 py-2 text-sm flex-1 rounded-l"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 rounded-r text-sm"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-xs text-gray-600 space-y-2 md:space-y-0">
          <p>© 2025 Cigar Manor — "Where Connoisseurs of Cool Meet Pleasure"</p>
          <div className="flex space-x-4">
            <Link href="#">X</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">LinkedIn</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/help">Help</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
