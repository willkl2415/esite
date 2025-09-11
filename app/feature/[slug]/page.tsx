"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const pageData: Record<string, { title: string; description: string }> = {
  "cigar-of-the-month": {
    title: "Cigar of the Month",
    description:
      "Explore our premium pick of the month. This page is a placeholder. Content coming soon.",
  },
  "top-10-products": {
    title: "Top 10 Products",
    description:
      "Discover the best-sellers ranked by popularity. This page is a placeholder. Content coming soon.",
  },
  "forthcoming-events": {
    title: "Forthcoming Events",
    description:
      "Stay updated with our upcoming events and experiences. This page is a placeholder. Content coming soon.",
  },
  subscriptions: {
    title: "Subscriptions",
    description:
      "Join our subscription plans for exclusive perks. This page is a placeholder. Content coming soon.",
  },
};

export default function FeaturePage() {
  const { slug } = useParams();
  const content = pageData[slug as string] || {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">{content.title}</h1>
      <p className="text-lg text-gray-700 mb-10">{content.description}</p>
      <Link
        href="/"
        className="inline-block bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition"
      >
        Return to Home
      </Link>
    </div>
  );
}
