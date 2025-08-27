"use client";

import { products } from "../data/products";
import Image from "next/image";
import Link from "next/link";

export default function AwardedCigarDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="p-10 bg-[#ff9800] min-h-screen text-center">
        <h1 className="text-2xl font-bold">Cigar not found</h1>
        <Link href="/awarded-cigars" className="text-purple hover:underline block mt-6">
          ← Back to Awarded Cigars
        </Link>
      </div>
    );
  }

  return (
    <div className="p-10 bg-[#ff9800] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="mx-auto rounded-lg object-contain bg-white"
        />
        <h1 className="text-3xl font-bold text-center mt-6">{product.name}</h1>
        <p className="text-center text-gray-600 text-lg mt-2">
          £{Number(product.price).toFixed(2)}
        </p>
        <p className="mt-6 text-center text-gray-700">{product.description}</p>

        {/* ✅ Fixed: Only Next.js Link here */}
        <div className="text-center mt-8">
          <Link href="/awarded-cigars" className="text-purple hover:underline">
            ← Back to Awarded Cigars
          </Link>
        </div>
      </div>
    </div>
  );
}
