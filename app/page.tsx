"use client";

import Image from "next/image";
import Link from "next/link";
import { Fahkwang } from "next/font/google";

// Load Fahkwang font
const fahkwang = Fahkwang({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HomePage() {
  return (
    <div
      className={`flex flex-col min-h-screen bg-white text-black ${fahkwang.className}`}
    >
      {/* === Hero Section === */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Where Cigars Come Alive
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Cigar Manor is your gateway to the world of cigars - discover and
            enjoy the flavours, and then make it your own.
          </p>
        </div>

        {/* Four Lifestyle Images */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src="/new-2.png"
              alt="New 2"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src="/cigar-15.png"
              alt="Cigar 15"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src="/cigar-guide-4.png"
              alt="Cigar Guide 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src="/f-30.png"
              alt="F 30"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* === Feature Cards Section === */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Finest Selection
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Cigar of the Month */}
          <Link href="/cigar-of-the-month">
            <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/cigar-1.png"
                alt="Cigar of the Month"
                width={400}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="text-xl font-bold">Cigar of the Month</h3>
                <p className="text-sm mt-2">Our premium pick</p>
              </div>
            </div>
          </Link>

          {/* Top 10 Products */}
          <Link href="/top-10-products">
            <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/cigar-2.png"
                alt="Top 10 Products"
                width={400}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="text-xl font-bold">Top 10 Products</h3>
                <p className="text-sm mt-2">Best-sellers ranked</p>
              </div>
            </div>
          </Link>

          {/* Forthcoming Events */}
          <Link href="/forthcoming-events">
            <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/cigar-3.png"
                alt="Forthcoming Events"
                width={400}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="text-xl font-bold">Forthcoming Events</h3>
                <p className="text-sm mt-2">Stay up to date</p>
              </div>
            </div>
          </Link>

          {/* Subscriptions */}
          <Link href="/subscriptions">
            <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/cigar-4.png"
                alt="Subscriptions"
                width={400}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="text-xl font-bold">Subscriptions</h3>
                <p className="text-sm mt-2">Join our club</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* === Crafted for Connoisseurs Section === */}
      <section className="w-full bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Headline */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Crafted for <br /> Connoisseurs
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Explore our complete{" "}
              <span className="font-semibold">A–Z of cigar brands</span> — from
              Cuban icons to New World discoveries.
            </p>
            <Link
              href="/category"
              className="mt-6 inline-block border border-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition"
            >
              Browse A–Z Cigars →
            </Link>
          </div>

          {/* Brand statement */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cigar Manor caters to both novices and seasoned aficionados by
              providing a vast array of cigars, including renowned Cuban and New
              World varieties.
            </p>
          </div>

          {/* Mission + Image */}
          <div className="flex flex-col gap-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to cultivate a vibrant community and challenge
              outdated perceptions about cigar culture.
            </p>
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/cigar-drink.png"
                alt="Cigar in ashtray"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
