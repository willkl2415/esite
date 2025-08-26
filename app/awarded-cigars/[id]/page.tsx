"use client";

import { useParams } from "next/navigation";
import { products } from "../../data/products";
import Image from "next/image";

export default function ProductPage() {
  // Get the product ID from the URL
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
        <p className="mt-4">Sorry, we couldn’t find that cigar.</p>
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
            {product.price}
          </p>
          <p className="text-gray-800 leading-relaxed">{product.description}</p>

          {/* Back link */}
          <a
            href="/awarded-cigars"
            className="mt-8 inline-block bg-black text-[#ff9800] px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            ← Back to Awarded Cigars
          </a>
        </div>
      </div>
    </div>
  );
}
