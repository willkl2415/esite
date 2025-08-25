"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* === Hero Section === */}
      <section className="bg-[#ff9800] text-center py-24">
        <h1 className="text-5xl font-extrabold mb-4 text-black">
          Cigar Manor
        </h1>
        <p className="text-xl italic text-black mb-8">
          Where Prestige Meets Pleasure.
        </p>
        <div className="flex justify-center gap-6">
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Shop Now
          </button>
          <button className="border border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition">
            Learn More
          </button>
        </div>
      </section>

      {/* === Product Section === */}
      <section className="py-16 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          { name: "Product 1", img: "/cigar-1.png" },
          { name: "Product 2", img: "/cigar-2.png" },
          { name: "Product 3", img: "/cigar-3.png" },
        ].map((product, idx) => (
          <div
            key={idx}
            className="border rounded-xl shadow-md p-6 flex flex-col items-center bg-white"
          >
            <div className="w-48 h-48 relative mb-4">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-600">£XX.XX</p>
          </div>
        ))}
      </section>
    </main>
  );
}
