"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const posts: Record<
  string,
  {
    title: string;
    date: string;
    image: string;
    content: string;
  }
> = {
  "art-of-cigar-smoking": {
    title: "The Art of Cigar Smoking",
    date: "August 25, 2025",
    image: "/cigar-10.png",
    content:
      "Cigar smoking is a ritual that dates back centuries. It’s not simply about lighting tobacco; it’s about craftsmanship, patience, and respect for tradition. A well-made cigar represents the work of dozens of skilled hands — from seed planting to the delicate art of rolling. Take your time. Cut carefully, light gently, and draw slowly. Each puff should be savoured, never rushed. In this way, cigar smoking becomes less of a habit and more of a ceremony.",
  },
  "cuban-handrollers": {
    title: "Cuban Handrollers — Myth & Mastery",
    date: "August 20, 2025",
    image: "/f-25.png",
    content:
      "The legend of the Cuban handroller maidens has fascinated cigar lovers for decades. While largely romanticised, it reflects the deep respect held for Cuba’s tobacco traditions. In reality, both men and women are part of Cuba’s expert torcedor (roller) community — each trained through years of apprenticeship. The myth may add a playful air of mystery, but the real mastery lies in the precision and pride that Cuban rollers bring to every cigar.",
  },
  "beauty-and-sophistication": {
    title: "The Beauty and Sophistication of Cigars",
    date: "August 15, 2025",
    image: "/f-27.png",
    content:
      "The beauty of cigars is in the drama they bring - smooth, bold, unapologetically sophisticated. Every draw is layered with craftsmanship and mystery, a ritual that feels both indulgent and magnetic. A strong cigar can fuel late-night conversations, while a lighter one sets the mood for quiet intimacy. The real thrill is experimenting with moments and moods - but remember, it’s about harmony. A cigar should seduce the senses, not steal the spotlight.",
  },
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts[slug as string];

  if (!post) {
    return (
      <div className="p-10 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-red-600">Post Not Found</h1>
        <Link href="/blog" className="text-[#ff9800] hover:text-black mt-4 block">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-4xl mx-auto bg-white border rounded-2xl shadow-md p-10">
        <Link
          href="/blog"
          className="text-sm text-[#ff9800] hover:text-black mb-6 inline-block"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-6">{post.date}</p>

        <div className="flex justify-center my-8">
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={400}
            className="rounded-lg shadow-md object-contain"
          />
        </div>

        <p className="text-lg leading-relaxed text-gray-800">{post.content}</p>
      </div>
    </div>
  );
}
