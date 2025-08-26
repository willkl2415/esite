"use client";

import { products } from "../data/products";
import Image from "next/image";
import Link from "next/link";

export default function AwardedCigarsPage() {
  const awarded = products.filter((p) => p.category === "awarded-cigars");

  return (
    <div className="p-10 bg-[#ff9800] min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">Awarded Cigars</h1>

      {awarded.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {awarded.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-4 text-center"
            >
              <Link href={`/awarded-cigars/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="mx-auto rounded-lg object-contain bg-white"
                />
              </Link>
              <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">
                £{Number(product.price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">No awarded cigars found.</p>
      )}
    </div>
  );
}
