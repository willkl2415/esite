"use client";

export default function HomePage() {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: "url('/landing-bg.jpg')" }} // optional background image
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Cigar Manor
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10">
          Where Heritage Meets Indulgence
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="/awarded-cigars"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
          >
            Shop Now
          </a>
          <a
            href="/about"
            className="border border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
