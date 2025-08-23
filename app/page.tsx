import {
  HeartIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  // nav items with info about whether they have a dropdown
  const navItems = [
    { label: "HOME", dropdown: false },
    { label: "HISTORY", dropdown: false },
    { label: "AWARDED CIGARS", dropdown: true },
    { label: "NEW WORLD CIGARS", dropdown: true },
    { label: "MACHINE-MADE CIGARS", dropdown: true },
    { label: "FLAVOURED CIGARS", dropdown: true },
    { label: "SAMPLERS", dropdown: true },
    { label: "ACCESSORIES", dropdown: true },
    { label: "GIFTS", dropdown: false },
    { label: "PROMOTIONS", dropdown: false },
    { label: "BLOG", dropdown: false },
  ];

  return (
    <main className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <div className="flex justify-between items-center px-8 py-4">
          {/* Left: Search */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search for products..."
              className="border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Center: Logo + Company */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border rounded-full flex items-center justify-center text-xs font-bold">
              LOGO
            </div>
            <span className="font-extrabold text-2xl tracking-tight">
              Company Name
            </span>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1 hover:text-gray-700 cursor-pointer transition">
              <HeartIcon className="h-5 w-5" />
              <span className="hidden md:inline">Wishlist</span>
            </div>
            <div className="flex items-center gap-1 hover:text-gray-700 cursor-pointer transition">
              <UserIcon className="h-5 w-5" />
              <span className="hidden md:inline">Account</span>
            </div>
            <div className="flex items-center gap-1 hover:text-gray-700 cursor-pointer transition">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="hidden md:inline">£0.00</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-8 px-6 py-3 border-t text-sm font-medium">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`/${item.label.toLowerCase().replace(/ /g, "-")}`}
              className="flex items-center gap-1 hover:text-black hover:underline transition"
            >
              {item.label}
              {item.dropdown && <span className="text-xs">▼</span>}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-24 border-b bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Shop in Style
        </h1>
        <p className="text-gray-500 mb-8 text-lg max-w-xl mx-auto">
          Exclusive, modern, and built for the next generation of shoppers.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-black text-white font-semibold hover:scale-105 transition">
            Shop Now
          </button>
          <button className="px-8 py-3 rounded-full border font-semibold hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Products */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 border-b max-w-6xl mx-auto">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="border rounded-2xl p-6 flex flex-col items-center shadow-sm hover:shadow-lg transition"
          >
            <div className="w-40 h-40 bg-gray-200 mb-6 rounded-lg"></div>
            <h3 className="mb-2 font-semibold text-lg">Product {item}</h3>
            <p className="mb-4 text-gray-500">£XX.XX</p>
            <button className="px-6 py-2 rounded-full border font-semibold hover:bg-gray-100 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="p-8 border-t text-center text-sm text-gray-500">
        <p>&copy; 2025 Company Name</p>
      </footer>
    </main>
  );
}
