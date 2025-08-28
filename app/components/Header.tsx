"use client";

import Image from "next/image";
import Link from "next/link";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import LanguageSwitcher from "../language-switcher";
import { useTranslation } from "../dictionary";

export default function Header() {
  const { t } = useTranslation();

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about-us" },
    { label: t("history"), href: "/history" },
    { label: t("awarded"), href: "/awarded-cigars" },
    { label: t("newWorld"), href: "/new-world-cigars" },
    { label: t("machineMade"), href: "/machine-made-cigars" },
    { label: t("flavoured"), href: "/flavoured-cigars" },
    { label: t("samplers"), href: "/samplers" },
    { label: t("accessories"), href: "/accessories" },
    { label: t("gifts"), href: "/gifts" },
    { label: t("promotions"), href: "/promotions" },
    { label: t("blog"), href: "/blog" },
  ];

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Cigar Manor" width={60} height={60} />
        </Link>

        {/* Search */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            className="w-full max-w-md border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
          />
        </div>

        {/* Nav */}
        <nav>
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4 ml-6">
          <LanguageSwitcher />
          <UserIcon className="w-6 h-6 text-gray-700" />
          <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
        </div>
      </div>
    </header>
  );
}
