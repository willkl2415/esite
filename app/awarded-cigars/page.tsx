"use client";

import { products } from "../data/products";   // FIXED path
import Image from "next/image";
import Link from "next/link";

export default function AwardedCigarsPage() {
  const awardedCigars = products.filter((p) => p.category === "awarded");

  return (
    <div className="p-10 bg-[#ff9800] min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">Awarded Cigars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {awardedCigars.map((cigar) => (
          <Link
            key={cigar.id}
            href={`/awarded-cigars/${cigar.id}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform"
          >
            <Image
              src={cigar.image}
              alt={cigar.name}
              width={300}
              height={300}
              className="w-full h-64 object-contain bg-white"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{cigar.name}</h2>
              <p className="text-gray-600 mt-2">£{Number(cigar.price).toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
