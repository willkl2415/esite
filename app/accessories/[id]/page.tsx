// app/accessories/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products"; // adjust path for each category

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#ff9800] p-10">
        <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
        <Link
          href=".."
          className="mt-4 bg-black text-[#ff9800] font-bold px-6 py-3 rounded-full shadow-md hover:bg-white hover:text-black transition"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ff9800] p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover w-full h-[350px]"
          />

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-black mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-[#ff9800] font-bold mb-4">
              £{Number(product.price).toFixed(2)}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>
            <Link
              href=".."
              className="bg-[#000100] text-[#ff9800] font-bold px-6 py-3 rounded-full shadow-md hover:bg-gray-900 hover:text-white transition"
            >
              ← Back to {product.category.replace("-", " ")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
