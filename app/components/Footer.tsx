import Link from "next/link";
import { labels } from "../dictionary";

function getLang(): string {
  if (typeof window !== "undefined") {
    return new URLSearchParams(window.location.search).get("lang") || "en";
  }
  return "en";
}

export default function Footer() {
  const lang = getLang();
  const t = labels[lang] || labels.en;

  return (
    <footer className="bg-[#ff9800] text-black mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10">
        {/* Why Shop */}
        <div>
          <h2 className="font-bold mb-2">Why Shop with Cigar Manor?</h2>
          <ul className="space-y-1 text-sm">
            <li>✔ Premium Selection</li>
            <li>✔ Expert Curation</li>
            <li>✔ Community & Trust</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href={`/sale?lang=${lang}`}>Sale</Link></li>
            <li><Link href={`/loyalty?lang=${lang}`}>Loyalty Club</Link></li>
            <li><Link href={`/journal?lang=${lang}`}>Journal</Link></li>
            <li><Link href={`/my-locker?lang=${lang}`}>My Locker</Link></li>
            <li><Link href={`/help/shipping?lang=${lang}`}>Shipping</Link></li>
            <li><Link href={`/help/returns?lang=${lang}`}>Returns</Link></li>
            <li><Link href={`/help/faq?lang=${lang}`}>FAQ</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-bold mb-2">Join the Manor Society</h2>
          <p className="text-sm mb-2">
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
              {t.join || "Join"}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-6 border-t border-black/20">
        <p className="text-sm italic">
          © 2025 Cigar Manor — &quot;{t.footerTagline}&quot;
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="#">{t.x}</Link>
          <Link href="#">{t.facebook}</Link>
          <Link href="#">{t.instagram}</Link>
          <Link href="#">{t.linkedin}</Link>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="#">{t.help}</Link>
          <Link href="#">{t.contact}</Link>
        </div>
      </div>
    </footer>
  );
}
