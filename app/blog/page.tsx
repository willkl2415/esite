"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The Art of Cigar Smoking",
      date: "August 25, 2025",
      excerpt:
        "Cigars are more than just tobacco — they’re tradition, craftsmanship, and indulgence. Here’s how to truly enjoy the art of cigar smoking...",
      image: "/cigar-10.png",
      slug: "art-of-cigar-smoking",
    },
    {
      id: 2,
      title: "Cuban Handrollers — Myth & Mastery",
      date: "August 20, 2025",
      excerpt:
        "From Havana’s cobblestone streets to luxury lounges, the legend of the Cuban handroller maidens lives on — but what’s the truth behind the myth?",
      image: "/f-25.png",
      slug: "cuban-handrollers",
    },
    {
      id: 3,
      title: "The Beauty and Sophistication of Cigars",
      date: "August 15, 2025",
      excerpt:
        "The beauty of cigars is in the drama they bring - smooth, bold, unapologetically sophisticated. Every draw is layered with craftsmanship and mystery...",
      image: "/f-27.png",
      slug: "beauty-and-sophistication",
    },
  ];

  return (
    <div className="p-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-md p-8 mb-10 text-center">
        <h1 className="text-3xl font-bold mb-4 text-[#ff9800]">
          The Cigar Manor Blog
        </h1>
        <p className="text-gray-700">
          Stories, traditions, and insights from the world of cigars — past,
          present, and future. Here you’ll find articles, guides, and news
          crafted for the cigar enthusiast.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
          >
            {/* Image */}
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            {/* Content */}
            <div className="p-6">
              <p className="text-xs text-gray-500">{post.date}</p>
              <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 text-[#ff9800] hover:text-black font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Single Back Home button only */}
      <div className="flex justify-center mt-12">
        <Link
          href="/"
          className="bg-black text-[#ff9800] px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
