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
    <footer className="bg-[#ff9800] text-center py-6 mt-10">
      <p className="text-sm text-black italic">
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
    </footer>
  );
}
