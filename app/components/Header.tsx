import Link from "next/link";
import Image from "next/image";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import LanguageSwitcher from "../language-switcher";
import { labels } from "../dictionary";

function getLang(): string {
  if (typeof window !== "undefined") {
    return new URLSearchParams(window.location.search).get("lang") || "en";
  }
  return "en";
}

export default function Header() {
  const lang = getLang();
  const t = labels[lang] || labels.en;

  const navItems = [
    { label: t.home, href: "/" },
    { label: t.about, href: "/about-us" },
    { label: t.history, href: "/history" },
    { label: t.awarded, href: "/awarded-cigars" },
    { label: t.newWorld, href: "/new-world-cigars" },
    { label: t.machineMade, href: "/machine-made-cigars" },
    { label: t.flavoured, href: "/flavoured-cigars" },
    { label: t.samplers, href: "/samplers" },
    { label: t.accessories, href: "/accessories" },
    { label: t.gifts, href: "/gifts" },
    { label: t.promotions, href: "/promotions" },
    { label: "Sale", href: "/sale" },          // ✅ New
    { label: "Loyalty", href: "/loyalty" },    // ✅ New
    { label: "Journal", href: "/journal" },    // ✅ New
    { label: "My Locker", href: "/my-locker" },// ✅ New
    { label: t.blog, href: "/blog" },
  ];

  return (
    <header>
      {/* Top Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b bg-white">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </Link>
          <div className="relative">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
        </div>

        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={`${item.href}?lang=${lang}`}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <UserIcon className="w-6 h-6" />
          <ShoppingCartIcon className="w-6 h-6" />
        </div>
      </nav>

      {/* Help Bar */}
      <div className="bg-gray-100 text-sm py-2 border-b">
        <div className="max-w-7xl mx-auto px-6 flex space-x-4">
          <span className="font-semibold">Help:</span>
          <Link href={`/help/shipping?lang=${lang}`}>Shipping</Link>
          <Link href={`/help/returns?lang=${lang}`}>Returns</Link>
          <Link href={`/help/faq?lang=${lang}`}>FAQ</Link>
        </div>
      </div>
    </header>
  );
}
