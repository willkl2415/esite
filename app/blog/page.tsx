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
      title: "Pairing Cigars with Whiskey",
      date: "August 15, 2025",
      excerpt:
        "Discover the timeless harmony between a well-aged cigar and a fine whiskey. Here’s how to create the perfect pairing experience...",
      image: "/f-27.png",
      slug: "cigars-and-whiskey",
    },
  ];

  return (
    <div className="min-h-screen bg-[#ff9800] text-black p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="mb-10 text-lg text-gray-800">
          Stories, traditions, and insights from the world of cigars — past,
          present, and future. Here you’ll find articles, guides, and news
          crafted for the cigar enthusiast.
        </p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-bold mb-4">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#ff9800] font-semibold hover:text-black"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Back button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="bg-[#000100] text-[#ff9800] font-bold px-6 py-3 rounded-full shadow-md hover:bg-gray-900 hover:text-white transition"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
