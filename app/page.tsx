export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Left: Search */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search for products..."
              className="border rounded px-3 py-1"
            />
            <button className="border px-3 py-1">🔍</button>
          </div>

          {/* Center: Logo + Company */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 border rounded-full flex items-center justify-center">
              LOGO
            </div>
            <span className="font-bold text-lg">Company Name</span>
          </div>

          {/* Right: Wishlist, Account, Cart */}
          <div className="flex items-center gap-4">
            <span>♡ Wishlist</span>
            <span>👤 Account</span>
            <span>🛒 £0.00</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center gap-8 px-6 py-2 border-t">
          <a href="#">Home</a>
          <a href="#">Text</a>
          <a href="#">Text</a>
          <a href="#">Text</a>
          <a href="#">Text</a>
          <a href="#">Text</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-16 border-b">
        <h1 className="text-4xl font-bold mb-4">Shop in Style</h1>
        <p className="text-gray-600 mb-6">Subheadline about your store and products.</p>
        <div className="flex justify-center gap-4">
          <button className="border px-4 py-2">Shop Now</button>
          <button className="border px-4 py-2">Learn More</button>
        </div>
      </section>

      {/* Products */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 border-b">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border rounded p-4 flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 mb-4"></div>
            <h3 className="mb-2">Product {item}</h3>
            <p className="mb-2">£XX.XX</p>
            <button className="border px-4 py-2">Add to Cart</button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="p-6 border-t text-center">
        <p>&copy; 2025 Company Name</p>
      </footer>
    </main>
  );
}
