"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#ff9800] p-10">
        <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
        <Link
          href="/new-world-cigars"
          className="mt-4 bg-black text-[#ff9800] font-bold px-6 py-3 rounded-full shadow-md hover:bg-white hover:text-black transition"
        >
          ← Back to new world cigars
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ff9800] p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-12">
        <div className="flex justify-end mb-6">
          <Link
            href="/new-world-cigars"
            className="bg-[#000100] text-[#ff9800] font-bold px-6 py-3 rounded-full shadow-md hover:bg-gray-900 hover:text-white transition"
          >
            ← Back to new world cigars
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-[400px]"
          />
          <div>
            <h1 className="text-4xl font-bold text-black mb-6">{product.name}</h1>
            <p className="text-2xl text-[#ff9800] font-bold mb-6">
              £{Number(product.price).toFixed(2)}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
