"use client";

import Image from "next/image";
import Link from "next/link";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "next-i18next";

export default function Navigation() {
  const { t } = useTranslation("common");

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
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
    <header>
      <nav className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
        </Link>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <UserIcon className="w-6 h-6" />
          <ShoppingCartIcon className="w-6 h-6" />
        </div>
      </nav>
    </header>
  );
}
