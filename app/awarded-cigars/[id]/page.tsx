"use client";

import { useParams } from "next/navigation";
import { products } from "../../data/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  // Get the product ID from the URL
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
        <p className="mt-4">Sorry, we couldn’t find that cigar.</p>
        <div className="mt-6">
          <Link
            href="/awarded-cigars"
            className="text-[#ff9800] hover:underline"
          >
            ← Back to Awarded Cigars
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg shadow-lg object-cover"
        />

        {/* Product Info */}
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-[#ff9800] font-semibold mb-6">
            £{Number(product.price).toFixed(2)}
          </p>
          <p className="text-gray-800 leading-relaxed">{product.description}</p>

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/awarded-cigars"
              className="bg-black text-[#ff9800] px-6 py-3 rounded-full hover:bg-white hover:text-black transition inline-block"
            >
              ← Back to Awarded Cigars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
