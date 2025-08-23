import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="text-center py-24 border-b bg-[#ff9800]">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-black">
          Cigar Manor
        </h1>
        <p className="text-black italic mb-8 text-lg max-w-xl mx-auto">
          Where Prestige Meets Pleasure.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-black text-white font-semibold hover:scale-105 transition">
            Shop Now
          </button>
          <button className="px-8 py-3 rounded-full bg-black text-white font-semibold hover:scale-105 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 border-b max-w-6xl mx-auto">
        {[
          { id: 1, name: "Product 1", price: "£XX.XX", image: "/cigar-1.png" },
          { id: 2, name: "Product 2", price: "£XX.XX", image: "/cigar-2.png" },
          { id: 3, name: "Product 3", price: "£XX.XX", image: "/cigar-3.png" },
        ].map((item) => (
          <div
            key={item.id}
            className="border rounded-2xl p-6 flex flex-col items-center shadow-sm hover:shadow-lg transition bg-white"
          >
            <div className="w-40 h-40 mb-6 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="mb-2 font-semibold text-lg text-black">
              {item.name}
            </h3>
            <p className="mb-4 text-gray-700">{item.price}</p>
            <button className="px-6 py-2 rounded-full bg-black text-[#ff9800] font-semibold hover:scale-105 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
