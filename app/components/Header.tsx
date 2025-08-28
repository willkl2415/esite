"use client";

import Image from "next/image";
import Link from "next/link";
import { UserIcon, ShoppingCartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";

export default function Header() {
  const { t } = useTranslation("common");
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    router.push(`/${lng}`);
  };

  return (
    <div className="flex justify-between items-center px-8 py-4 border-b bg-white sticky top-0 z-50">
      {/* Left: Search */}
      <div className="flex items-center border border-black rounded-full px-3 py-2 w-64">
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-1 outline-none text-sm text-black"
        />
        <MagnifyingGlassIcon className="h-5 w-5 text-purple cursor-pointer hover:text-black" />
      </div>

      {/* Center: Logo */}
      <div className="flex items-center justify-center">
        <Image
          src="/cigar-manor.png"
          alt="Cigar Manor Logo"
          width={120}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Right: Icons + Language Switcher */}
      <div className="flex items-center gap-6 text-sm">
        <Link href="/account" className="flex items-center gap-1 hover:text-purple">
          <UserIcon className="h-5 w-5" />
          <span className="hidden md:inline">My Account</span>
        </Link>
        <div className="flex items-center gap-1 hover:text-purple">
          <ShoppingCartIcon className="h-5 w-5" />
          <span className="hidden md:inline">£0.00</span>
        </div>

        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
          defaultValue="en"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
        </select>
      </div>
    </div>
  );
}
