"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const posts: Record<
  string,
  {
    title: string;
    date: string;
    content: string[];
    images: string[];
  }
> = {
  "art-of-cigar-smoking": {
    title: "The Art of Cigar Smoking",
    date: "August 25, 2025",
    content: [
      "Cigar smoking is a ritual that dates back centuries. It’s not simply about lighting tobacco; it’s about craftsmanship, patience, and respect for tradition.",
      "A well-made cigar represents the work of dozens of skilled hands — from seed planting to the delicate art of rolling.",
      "Take your time. Cut carefully, light gently, and draw slowly. Each puff should be savoured, never rushed. In this way, cigar smoking becomes less of a habit and more of a ceremony.",
    ],
    images: ["/cigar-10.png", "/f-25.png", "/f-27.png"],
  },
  "cuban-handrollers": {
    title: "Cuban Handrollers — Myth & Mastery",
    date: "August 20, 2025",
    content: [
      "The legend of the Cuban handroller maidens has fascinated cigar lovers for decades. While largely romanticised, it reflects the deep respect held for Cuba’s tobacco traditions.",
      "In reality, both men and women are part of Cuba’s expert torcedor (roller) community — each trained through years of apprenticeship.",
      "The myth may add a playful air of mystery, but the real mastery lies in the precision and pride that Cuban rollers bring to every cigar.",
    ],
    images: ["/cigar-10.png", "/f-25.png", "/f-27.png"],
  },
  "cigars-and-whiskey": {
    title: "Pairing Cigars with Whiskey",
    date: "August 15, 2025",
    content: [
      "Pairing cigars with whiskey is a timeless indulgence. Both are crafted with patience and expertise, and when matched well, they elevate each other.",
      "Full-bodied cigars often pair beautifully with smoky Scotch, while a milder cigar might shine with a smooth bourbon or Irish whiskey.",
      "Experimenting with pairings is part of the pleasure — but remember, balance is key. Neither should overpower the other.",
    ],
    images: ["/cigar-10.png", "/f-25.png", "/f-27.png"],
  },
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts[slug as string];

  if (!post) {
    return (
      <div className="p-10 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-red-600">Post Not Found</h1>
        <Link
          href="/blog"
          className="text-[#ff9800] hover:text-black mt-4 block"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ff9800] text-black p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-6">{post.date}</p>

        {/* Content with images */}
        {post.content.map((para, idx) => (
          <div key={idx}>
            <p className="mb-6">{para}</p>
            {post.images[idx] && (
              <div className="flex justify-center my-8">
                <Image
                  src={post.images[idx]}
                  alt={post.title}
                  width={800}
                  height={500}
                  className="rounded-lg shadow-md object-contain"
                />
              </div>
            )}
          </div>
        ))}

        {/* Back link */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="bg-[#000100] text-[#ff9800] font-bold px-6 py-3 rounded-full shadow-md hover:bg-gray-900 hover:text-white transition"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
