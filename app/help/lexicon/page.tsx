"use client";

export default function LexiconPage() {
  // For now static; later we can make it searchable/filterable
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">
        Cigar Manor Lexicon
      </h1>

      <p className="text-center mb-10 text-lg text-gray-700">
        An A–Z glossary of cigar terminology and culture, compiled by Cigar Manor.
      </p>

      <div className="space-y-10">
        {/* Example of structured entries */}
        <section>
          <h2 className="text-2xl font-semibold text-[#ff9800] mb-4">A</h2>
          <ul className="space-y-2 text-lg">
            <li>
              <strong>Acopio Y Beneficio</strong> – The process of gathering and improving
              tobacco leaves after harvest until placed in bales to mature.
            </li>
            <li>
              <strong>Aging / Ageing Room</strong> – The process of resting cigars in
              controlled conditions (humidity, temperature) to enhance flavors, aroma,
              and smoothness. Properly aged cigars are more refined and less harsh.
            </li>
            <li>
              <strong>Amatista</strong> – A glass jar traditionally used to sell and store
              cigars/pipe tobacco, maintaining freshness and humidity.
            </li>
            <li>
              <strong>Anilla</strong> – Spanish term for cigar band or ring.
            </li>
            <li>
              <strong>Aroma</strong> – The scent of a cigar, a key part of the smoking
              experience. Can be floral, earthy, sweet, spicy, etc.
            </li>
          </ul>
        </section>

        {/* Repeat same structure for B, C, D ... Z */}

        <section>
          <h2 className="text-2xl font-semibold text-[#ff9800] mb-4">B</h2>
          <ul className="space-y-2 text-lg">
            <li>
              <strong>Band</strong> – Decorative paper strip around cigars, historically for
              protection, now branding.
            </li>
            <li>
              <strong>Binder / Capote</strong> – The tough tobacco leaf holding filler in
              place, ensuring combustion and burn consistency.
            </li>
            <li>
              <strong>Bloom (Plume)</strong> – White crystalline powder from aged tobacco
              oils. Harmless, often desirable, distinct from mold.
            </li>
          </ul>
        </section>

        {/* Add further sections for rest of the alphabet */}
      </div>
    </div>
  );
}
