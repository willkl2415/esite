"use client";

import Image from "next/image";

export default function HistoryPage() {
  const sections = [
    {
      title: "The Origins of Cigars",
      text: "The story of cigars begins in the Caribbean and Central America, where indigenous peoples first cultivated and smoked tobacco as part of ritual and tradition. Women often played a quiet but central role in cultivating, drying, and preparing the leaves — a reminder that cigar history is not only about warriors and explorers, but also the steady hands behind the first harvests.",
      image: "/history-9.png",
    },
    {
      title: "The Spanish Discover Tobacco",
      text: "In the late 15th century, Spanish explorers encountered tobacco and carried it back to Europe. The exotic plant was quickly embraced in royal courts and salons, where men and women alike experimented with the ‘New World’ leaf. Cigars became a luxury symbol, and whispers spread of women in Havana rolling cigars with an artistry that outshone their male counterparts.",
      image: "/history-F1.png",
    },
    {
      title: "Cuban Mastery",
      text: "By the 18th century, Cuba had become the undisputed epicenter of cigar craftsmanship. The fertile Cuban soil produced leaves of unmatched character, and the rolling tables became legendary. There is even a myth — often told with a wink — that cigar factories once employed young women to roll cigars on their thighs, a playful tale that endures as part of cigar folklore, even if the truth was more about skill than spectacle.",
      image: "/history-3.png",
    },
    {
      title: "The Dominican Expansion",
      text: "In the 20th century, the Dominican Republic rose to prominence as Cuba’s great rival. Dominican cigars became celebrated for their consistency and elegance, winning admirers across Europe and the Americas. Women were not just consumers but also factory workers, tasters, and promoters, quietly shaping reputations in an industry that too often pretended otherwise.",
      image: "/history-2.png",
    },
    {
      title: "Nicaraguan Strength",
      text: "Nicaragua forged its reputation on bold, full-bodied cigars, fueled by volcanic soil that gave tobaccos a unique fire. As the global market grew, women increasingly stepped forward — not just in the factories, but also in marketing, blending, and even leading family cigar houses. The strength of the leaf, and the resilience of the people behind it, mirrored one another.",
      image: "/history-5.png",
    },
    {
      title: "Honduran Tradition",
      text: "Honduras became another powerhouse in the cigar world, producing distinctive blends known for depth and spice. Here too, the artistry of hand-rolling was passed down through generations, often within families where both men and women shared in the craft. The quiet pride of Honduran cigar makers reflected the intimacy of an art form born at the fingertips.",
      image: "/history-F3.png",
    },
    {
      title: "Cigars in America",
      text: "In Florida and beyond, immigrant cigar rollers established vibrant communities, with Tampa crowned the cigar capital of the United States. Cuban women, often overlooked in the grand narratives, brought both labor and flair to the factories, and became a familiar sight in cigar lounges. The romance of the cigar in American culture was as much about personality as it was about the leaf.",
      image: "/history-7.png",
    },
    {
      title: "Global Growth",
      text: "Today, premium cigars are crafted in dozens of countries, celebrated by aficionados from London to Tokyo. Women, once hidden in the background of the trade, now appear on both sides of the counter — leading brands, shaping blends, and lighting up cigars in lounges with the same authority as any man. The myth of the handroller maidens lingers, but it is eclipsed by the very real achievements of women shaping the industry today.",
      image: "/history-F4.png",
    },
    {
      title: "Modern Innovations",
      text: "From boutique brands to experimental curing methods, the cigar world continues to evolve while honoring its centuries-old traditions. Women are increasingly visible as brand ambassadors, blenders, and even Instagram personalities, reminding the world that cigar enjoyment is not bound by gender. The leaf still carries with it the spirit of history, culture, and a touch of playful legend.",
      image: "/history-1.png",
    },
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">
        🌍 The History of Cigars
      </h1>
      <div className="space-y-16">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Narrative in white card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {section.text}
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="w-[500px] h-[300px] relative">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
