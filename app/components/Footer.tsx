export default function Footer() {
  return (
    <footer className="mt-20 bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* Copyright */}
        <p className="opacity-80">
          &copy; {new Date().getFullYear()} Cigar Manor. All rights reserved.
        </p>

        {/* Quick Links */}
        <nav className="flex flex-wrap items-center gap-6">
          <a href="/category" className="hover:underline">
            Cigars
          </a>
          <a href="/tobacco" className="hover:underline">
            Tobacco
          </a>
          <a href="/accessories" className="hover:underline">
            Accessories
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* Attribution */}
        <p className="opacity-70 text-xs">
          Built with ❤️ for cigar enthusiasts.
        </p>
      </div>
    </footer>
  );
}
