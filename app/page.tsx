export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero text-center py-24 border-b bg-gradient-to-b from-light to-white">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-secondary">
          Shop in Style
        </h1>
        <p className="text-accent mb-8 text-lg max-w-xl mx-auto">
          Exclusive, modern, and built for the next generation of shoppers.
        </p>
        <div className="flex justify-center gap-4">
          <button className="primary">
            Shop Now
          </button>
          <button className="secondary">
            Learn More
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 border-b max-w-6xl mx-auto">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="product-card"
          >
            <div className="w-40 h-40 bg-accent mb-6 rounded-lg"></div>
            <h3 className="mb-2 font-semibold text-lg text-secondary">
              Product {item}
            </h3>
            <p className="mb-4 text-accent">£XX.XX</p>
            <button className="secondary">
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
