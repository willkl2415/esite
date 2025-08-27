"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products"; // go back 2 levels

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
        <Link
          href=".."
          className="text-[#ff9800] hover:text-black mt-4 inline-block"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={350}
          className="rounded-lg shadow-lg object-cover w-full h-[350px]"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-[#ff9800] font-semibold mb-4">
            £{Number(product.price).toFixed(2)}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>
          <Link
            href=".."
            className="bg-black text-[#ff9800] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-white hover:text-black transition"
          >
            ← Back to {product.category.replace("-", " ")}
          </Link>
        </div>
      </div>
    </div>
  );
}
