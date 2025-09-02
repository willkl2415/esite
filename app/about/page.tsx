"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#ff9800] text-black p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl font-bold mb-2">Cigars for Beginners</h1>
        <p className="italic text-lg mb-8">Where Connoisseurs of Cool Meet Pleasure</p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mb-4">Discover the Culture of Cool</h2>
        <p className="mb-6">
          Stepping into the world of cigars isn’t just about smoke — it’s about stepping into a culture.
          The cedar-lined boxes, the rich aromas, the quiet confidence of choosing the right cigar…
          it all creates an atmosphere that feels both timeless and effortlessly modern. Cigars carry a
          sense of cool that goes beyond the product itself. They’re about slowing down, creating space
          for yourself, and joining a tradition that values taste, craftsmanship, and style in equal measure.
          For a new smoker, that’s the first mindset to embrace: cigars aren’t intimidating; they’re an
          invitation to enjoy life with a touch more refinement.
        </p>
        <div className="flex justify-center my-6">
          <Image
            src="/f-23.png"
            alt="Culture of cool"
            className="rounded-lg shadow-md object-contain"
          />
        </div>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mb-4">First Impressions Count</h2>
        <p className="mb-6">
          Your first cigar shapes how you see the entire experience, so choosing wisely matters.
          A mild cigar is the smart starting point — smooth, creamy, and approachable, much like your
          first latte before ever daring an espresso shot. Shorter formats, like a Robusto or Petit
          Corona, give you a balanced introduction without demanding too much of your time. Wider cigars
          also provide a cooler, easier draw, which makes them friendlier for newcomers. What you want
          to avoid at first are the long, slim shapes that burn hotter and feel harsher. Think of your
          first impression as a foundation: it should feel welcoming, not overwhelming.
        </p>
        <div className="flex justify-center my-6">
          <Image
            src="/cigar-3.png"
            alt="First impressions"
            className="rounded-lg shadow-md object-contain"
          />
        </div>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mb-4">Flavour, Craft & Indulgence</h2>
        <p className="mb-6">
          Cigars are a craft as much as they are a pleasure. For beginners, the flavours that resonate
          are those that feel familiar and inviting — notes of cream, nuts, cocoa, cedar, even a gentle
          touch of spice. Handmade cigars are where this character truly shines. Each one is rolled with
          care, delivering consistency and a depth that machine-made versions simply can’t match. And while
          the craftsmanship may feel luxurious, the cost doesn’t need to be. Premium beginner-friendly cigars
          usually sit comfortably in the £10–£20 range — giving you indulgence without excess. Trusted names
          like Macanudo Café, Romeo y Julieta Reserva Real, Ashton Classic, or Oliva Connecticut Reserve are
          excellent places to begin.
        </p>
        <div className="flex justify-center my-6">
          <Image
            src="/cigar-guide-5.png"
            alt="Flavour and craft"
            className="rounded-lg shadow-md object-contain"
          />
        </div>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mb-4">Capture Every Moment</h2>
        <p className="mb-6">
          What makes cigars unique isn’t just the taste — it’s the experience. Lighting a cigar creates
          an occasion, whether you’re unwinding solo or sharing time with friends. A few essentials enhance
          this journey: a guillotine cutter for a clean draw, a butane torch lighter for a pure flame, and
          a simple humidor or humidity pouch to keep cigars fresh. But beyond the accessories, cigars are
          about moments. They give you permission to slow down, to pause, and to enjoy time in a way that
          feels intentional. Your first cigar isn’t just a smoke; it’s an introduction to a lifestyle where
          every detail counts, and every moment becomes something worth remembering.
        </p>
        <div className="flex justify-center my-6">
          <Image
            src="/f-27.png"
            alt="Capture every moment"
            className="rounded-lg shadow-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}
