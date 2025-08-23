export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="text-center py-24 border-b bg-gradient-to-b from-light to-white">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-secondary">
          Shop in Style
        </h1>
        <p className="text-accent mb-8 text-lg max-w-xl mx-auto">
          Exclusive, modern, and built for the next generation of shoppers.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-secondary hover:scale-105 transition">
            Shop Now
          </button>
          <button className="px-8 py-3 rounded-full border border-secondary text-secondary font-semibold hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 border-b max-w-6xl mx-auto">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="border rounded-2xl p-6 flex flex-col items-center shadow-sm hover:shadow-lg transition bg-white"
          >
            <div className="w-40 h-40 bg-accent mb-6 rounded-lg"></div>
            <h3 className="mb-2 font-semibold text-lg text-secondary">
              Product {item}
            </h3>
            <p className="mb-4 text-accent">£XX.XX</p>
            <button className="px-6 py-2 rounded-full border border-secondary text-secondary font-semibold hover:bg-gray-100 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
