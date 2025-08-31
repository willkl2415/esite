"use client";

export default function LexiconPage() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">
        Cigar Manor Lexicon
      </h1>

      {/* Jump Index */}
      <div className="mb-10 text-center">
        {["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"].map(letter => (
          <a key={letter} href={`#${letter}`} className="mx-2 text-[#ff9800] font-bold hover:underline">{letter}</a>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-md p-10 text-left">
        <p className="mb-8 text-lg text-gray-700">
          An A–Z glossary of cigar terminology and culture, compiled by Cigar Manor.
        </p>
        <h2 id="A" className="text-2xl font-semibold text-[#ff9800] mb-4">A</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Acopio Y Beneficio</strong> – The process of gathering and improving tobacco leaves after harvest until placed in bales to mature.</li>
          <li><strong>Aging / Ageing Room</strong> – The process of resting cigars in controlled conditions (humidity, temperature) to enhance flavors, aroma, and smoothness. Properly aged cigars are more refined and less harsh.</li>
          <li><strong>Amatista</strong> – A glass jar traditionally used to sell and store cigars/pipe tobacco, maintaining freshness and humidity.</li>
          <li><strong>Anap</strong> – Asociación Nacional de Agricultores Pequeños (National Association of Small Farmers), represented on Cuba’s D.O.P. Habanos Regulatory Council.</li>
          <li><strong>Anilla</strong> – Spanish term for cigar band or ring.</li>
          <li><strong>Aporque</strong> – Action of piling soil around the base of the tobacco plant to strengthen root growth.</li>
          <li><strong>Aroma</strong> – The scent of a cigar, a key part of the smoking experience. Can be floral, earthy, sweet, spicy, etc.</li>
          <li><strong>Aroma Wheel</strong> – A tool breaking down aroma categories to help smokers identify and describe scents.</li>
          <li><strong>Ash</strong> – Residue after burning. Its firmness and color (white/grey vs. dark/flake) can indicate tobacco quality.</li>
        </ul>

        <h2 id="B" className="text-2xl font-semibold text-[#ff9800] mb-4">B</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Band</strong> – Decorative paper strip around cigars, historically for protection, now branding.</li>
          <li><strong>Barajita</strong> – “Pack of cards,” nickname for blending department, since mixing leaves resembles shuffling.</li>
          <li><strong>Binder / Capote</strong> – The tough tobacco leaf holding filler in place, ensuring combustion and burn consistency.</li>
          <li><strong>Blend / Blending</strong> – Mixing different tobaccos (from varied regions, primings, fermentation stages) to create unique flavor profiles.</li>
          <li><strong>Bloom (Plume)</strong> – White crystalline powder from aged tobacco oils. Harmless, often desirable, distinct from mold.</li>
          <li><strong>Bonche</strong> – Bunch formed when filler is wrapped inside binder.</li>
          <li><strong>Boquilla</strong> – Spanish for the foot of a cigar (the end you light).</li>
          <li><strong>Bouquet</strong> – Combined aroma released during smoking.</li>
          <li><strong>Box-Pressed</strong> – A squarer cigar shape created by compression in a box. Can subtly change draw and flavor.</li>
          <li><strong>Booking</strong> – Rolling method where filler leaves are stacked like pages in a book before being rolled.</li>
          <li><strong>Bunching</strong> – Arranging filler leaves prior to applying binder; crucial for airflow and even burn.</li>
          <li><strong>Bundle</strong> – 25–50 cigars wrapped in cellophane (not boxes), usually cheaper.</li>
          <li><strong>Burro</strong> – Term for stale or improperly stored cigars.</li>
        </ul>

        <h2 id="C" className="text-2xl font-semibold text-[#ff9800] mb-4">C</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Cajuela / Mini-Rodero</strong> – Lidless open box used inside factories to move cigars before QC.</li>
          <li><strong>Candela</strong> – Green wrapper, produced by quick curing; gives grassy, vegetal flavor.</li>
          <li><strong>Canoeing</strong> – Burn problem where one side burns faster, leaving uneven wrapper.</li>
          <li><strong>Cap</strong> – Wrapper piece covering the cigar’s head; cut before smoking.</li>
          <li><strong>Capa</strong> – Spanish for wrapper leaf; the cigar’s outermost layer, affecting flavor and appearance.</li>
          <li><strong>Carona</strong> – Very long, slim cigar (~9 inches, ring 42 or smaller).</li>
          <li><strong>Casa De Tabaco</strong> – Cuban curing barn where leaves dry and undergo first fermentation.</li>
          <li><strong>Casquillo</strong> – Tool for cutting wrapper pieces for cigar caps.</li>
          <li><strong>Catadores</strong> – Professional cigar tasters in factories.</li>
          <li><strong>Cedar / Cedros</strong> – Cedarwood used for boxes, lining, or strips, helps humidity control.</li>
          <li><strong>Cepo</strong> – Template for checking length and ring gauge of finished cigars.</li>
          <li><strong>Chaveta</strong> – Rounded knife torcedores use to cut leaves.</li>
          <li><strong>Churchill</strong> – Large vitola (~7 x 47) named for Winston Churchill.</li>
          <li><strong>Claro</strong> – Pale wrapper shade, usually mild flavor.</li>
          <li><strong>Colorado</strong> – Medium-brown wrapper shade. Subtypes: Colorado Claro (lighter) and Colorado Maduro (darker).</li>
          <li><strong>Comisión Nacional De Degustación</strong> – Cuban body of expert tasters standardizing blend quality.</li>
          <li><strong>Connecticut</strong> – Silky, mild wrapper grown in Connecticut (USA) or Ecuador. Popular for light-bodied cigars.</li>
          <li><strong>Consejo Regulador (D.O.P. Habanos)</strong> – Cuban regulatory council overseeing Habanos quality and denomination of origin.</li>
          <li><strong>Corojo</strong> – Classic Cuban seed, once staple wrapper leaf, bold/spicy.</li>
          <li><strong>Corona</strong> – Benchmark vitola (~5–6 x 42).</li>
          <li><strong>Culebra</strong> – Three Panatelas braided together; smoked individually.</li>
          <li><strong>Curing / Curación</strong> – First post-harvest stage; leaves air-dried in barns before fermentation.</li>
          <li><strong>Cutter / Guillotine</strong> – Tool for cutting cigar heads.</li>
          <li><strong>Cuje</strong> – Pole used to hang tobacco pairs in barns.</li>
        </ul>

        <h2 id="D" className="text-2xl font-semibold text-[#ff9800] mb-4">D</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Desbotonar</strong> – Removing top flower bud to direct energy to leaves.</li>
          <li><strong>Deshije</strong> – Removing side shoots.</li>
          <li><strong>Despalillo / Despalilladores</strong> – Stemming leaves (removing veins); women traditionally staffed this in Cuban factories.</li>
          <li><strong>Draw</strong> – Resistance of air through a cigar. Tight draw = hard to smoke, loose draw = overheated burn.</li>
          <li><strong>Draw Tool</strong> – Device to fix plugged/tight cigars.</li>
          <li><strong>Dry Draw</strong> – Test draw before lighting; helps preview aromas.</li>
          <li><strong>Double Corona</strong> – Large vitola (~7.5 x 49–52) offering long smoke.</li>
        </ul>

        <h2 id="E" className="text-2xl font-semibold text-[#ff9800] mb-4">E</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Edición Limitada</strong> – Cuban annual Limited Editions with aged wrapper/filler/binder (2+ years).</li>
          <li><strong>Emboquillado</strong> – Technique of combining two types of filler leaves in one bunch.</li>
          <li><strong>Ensarte</strong> – Sewing leaves together in pairs for barn drying.</li>
          <li><strong>Entubar</strong> – Cuban rolling style folding leaves like accordion tubes, improving airflow and burn.</li>
          <li><strong>Escogida / Escogedores</strong> – Sorting house for leaf classification; workers also match wrapper colors.</li>
        </ul>

        <h2 id="F" className="text-2xl font-semibold text-[#ff9800] mb-4">F</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Fermentation</strong> – Natural heating of moist tobacco piles to reduce ammonia and develop flavor.</li>
          <li><strong>Filler / Tripa</strong> – Core of the cigar; determines body, strength, and flavors.</li>
          <li><strong>Figurado</strong> – Non-straight cigar shapes (Perfecto, Torpedo, Pyramid, etc.).</li>
          <li><strong>Finish</strong> – Lingering aftertaste in mouth post-draw.</li>
          <li><strong>Flavor Profile</strong> – Combined taste experience (sweet, spicy, earthy, etc.).</li>
          <li><strong>Foot</strong> – End lit during smoking.</li>
          <li><strong>Foot Band</strong> – Small band at cigar foot (decorative, removed before smoking).</li>
          <li><strong>Fortaleza</strong> – Cuban classification of leaf strength: Volado (light), Seco (medium), Ligero (strong), Medio Tiempo (extra strong).</li>
        </ul>

        <h2 id="G" className="text-2xl font-semibold text-[#ff9800] mb-4">G</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Galera</strong> – Factory workshop floor for hand-rolling cigars.</li>
          <li><strong>Gauge / Ring Gauge</strong> – Cigar diameter, measured in 64ths of an inch.</li>
          <li><strong>Gavilla</strong> – Tied bundle of sorted tobacco leaves.</li>
          <li><strong>Goma / Gum</strong> – Natural vegetable adhesive for wrapper/cap.</li>
          <li><strong>Gorda</strong> – Thick cigar (~46 ring gauge Corona).</li>
          <li><strong>Gran Corona</strong> – Long, thick corona (~6 x 50).</li>
          <li><strong>Gran Reserva</strong> – Very rare Cuban release aged 5+ years pre-roll.</li>
        </ul>

        <h2 id="H" className="text-2xl font-semibold text-[#ff9800] mb-4">H</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Habano</strong> – Cuban cigar made exclusively of Cuban tobacco. Protected Denomination of Origin.</li>
          <li><strong>Habanos S.A.</strong> – Cuban state-owned distributor of premium brands worldwide.</li>
          <li><strong>Habanosommelier</strong> – Professional pairing Habanos with drinks; international competition held annually.</li>
          <li><strong>Habilitaciones</strong> – Colorful box labels used on Cuban cigars.</li>
          <li><strong>Handmade / Hecho A Mano</strong> – Hand-rolled cigars, higher quality.</li>
          <li><strong>Havana Seed</strong> – Cuban-origin seed now cultivated worldwide.</li>
          <li><strong>Head</strong> – Cigar end placed in the mouth.</li>
          <li><strong>Hecho En Cuba</strong> – “Made in Cuba” stamp.</li>
          <li><strong>Hot</strong> – Cigar that burns too quickly, producing harsh smoke.</li>
          <li><strong>Humidor</strong> – Storage unit (box, cabinet, or room) maintaining ~70% humidity for cigars.</li>
        </ul>

        <h2 id="I" className="text-2xl font-semibold text-[#ff9800] mb-4">I</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Infused Cigars</strong> – Cigars flavored with botanicals, liquor, fruits, etc.</li>
          <li><strong>Instituto De Investigaciones Del Tabaco</strong> – Cuban research institute developing and regulating seeds.</li>
        </ul>

        <h2 id="J" className="text-2xl font-semibold text-[#ff9800] mb-4">J</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Julep Strainer</strong> – Tool used in shaping cigar caps during rolling.</li>
        </ul>

        <h2 id="K" className="text-2xl font-semibold text-[#ff9800] mb-4">K</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Kiln Drying</strong> – Mechanical process removing leaf moisture; controversial due to impact on flavor.</li>
        </ul>

        <h2 id="L" className="text-2xl font-semibold text-[#ff9800] mb-4">L</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>La Casa Del Habano</strong> – Cuban cigar shop franchise (140+ globally).</li>
          <li><strong>Lector</strong> – Reader who entertains cigar rollers by reading books/newspapers aloud.</li>
          <li><strong>Ligador</strong> – Master blender overseeing consistency of flavor.</li>
          <li><strong>Ligero</strong> – Top leaves of plant; strong, flavorful, dark.</li>
          <li><strong>Lonsdale</strong> – Slim vitola (~6 x 42–44).</li>
          <li><strong>Long Filler / Tripa Larga</strong> – Whole-leaf filler providing even burn and quality.</li>
        </ul>

        <h2 id="M" className="text-2xl font-semibold text-[#ff9800] mb-4">M</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Maduro</strong> – Dark, well-fermented wrapper (brown to black); produces sweet, rich flavors.</li>
          <li><strong>Mancuerna</strong> – Harvesting method cutting stems with two leaves attached.</li>
          <li><strong>Mareva</strong> – Classic Cuban size (~5 x 42).</li>
          <li><strong>Media Rueda</strong> – Bundle of 50 cigars.</li>
          <li><strong>Medio Tiempo</strong> – Rare, small top leaves, powerful strength (used in Cohiba Behike).</li>
          <li><strong>Moja</strong> – Process of moistening tobacco leaves.</li>
          <li><strong>Mouthfeel</strong> – Texture and body of smoke in mouth.</li>
        </ul>

        <h2 id="N" className="text-2xl font-semibold text-[#ff9800] mb-4">N</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Non-Cuban Cigars</strong> – Cigars made outside Cuba (e.g., Nicaragua, Dominican Republic, Honduras).</li>
        </ul>

        <h2 id="O" className="text-2xl font-semibold text-[#ff9800] mb-4">O</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Oil</strong> – Sheen of natural oils on wrapper, indicator of quality and proper storage.</li>
          <li><strong>Oscuro</strong> – Very dark (almost black) wrapper shade; strongest fermentation.</li>
        </ul>

        <h2 id="P" className="text-2xl font-semibold text-[#ff9800] mb-4">P</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Pacas</strong> – Hessian bales where binder/filler leaves are aged.</li>
          <li><strong>Panatela</strong> – Thin, long cigar shape.</li>
          <li><strong>Parejo</strong> – Straight-sided cigar with rounded head.</li>
          <li><strong>Perfecto</strong> – Double-tapered cigar shape.</li>
          <li><strong>Plug</strong> – Blockage restricting airflow.</li>
          <li><strong>Punch</strong> – Cutter that bores a hole in cigar head.</li>
        </ul>

        <h2 id="Q" className="text-2xl font-semibold text-[#ff9800] mb-4">Q</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Quarter Filler</strong> – Cheap chopped filler used in lower-grade cigars.</li>
        </ul>

        <h2 id="R" className="text-2xl font-semibold text-[#ff9800] mb-4">R</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Reserva</strong> – Cuban release aged minimum 3 years pre-roll.</li>
          <li><strong>Rezagado</strong> – Final wrapper grading.</li>
          <li><strong>Ring Gauge</strong> – Standard measure of cigar diameter.</li>
          <li><strong>Rodero</strong> – Factory container transporting mini-roderos of cigars.</li>
          <li><strong>Rosado</strong> – Reddish-brown wrapper leaf.</li>
          <li><strong>Rolling</strong> – The craft of assembling cigars.</li>
        </ul>

        <h2 id="S" className="text-2xl font-semibold text-[#ff9800] mb-4">S</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>San Juan Y Martínez</strong> – Cuban region known for binder/filler cultivation.</li>
          <li><strong>San Luis</strong> – Cuban region renowned for wrapper production.</li>
          <li><strong>Seco</strong> – Mid-plant filler leaves; mild flavor, aromatic.</li>
          <li><strong>Semi Vuelta</strong> – Cuban region for binder/filler, seed production.</li>
          <li><strong>Shade-Grown / Tapado</strong> – Wrappers grown under cloth for elasticity.</li>
          <li><strong>Short Filler / Tripa Corta</strong> – Chopped filler; burns hotter, less consistent.</li>
          <li><strong>Shoulder</strong> – Curve where cap meets wrapper.</li>
          <li><strong>Smoke Rings</strong> – Circular smoke shapes blown by smoker.</li>
          <li><strong>Stack</strong> – Retained ash stack, indicator of quality.</li>
          <li><strong>Stogie</strong> – Slang for cigar.</li>
          <li><strong>Sun-Grown / Tabaco De Sol</strong> – Tobacco grown in full sun, thicker leaves.</li>
        </ul>

        <h2 id="T" className="text-2xl font-semibold text-[#ff9800] mb-4">T</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Tabaco</strong> – Spanish for tobacco/cigar.</li>
          <li><strong>Tabaco Mecanizado</strong> – Machine-made cigars.</li>
          <li><strong>Tabaco Negro Cubano</strong> – Cuban indigenous black tobacco.</li>
          <li><strong>Tabacuba</strong> – Cuban corporation managing industry.</li>
          <li><strong>Tabla</strong> – Wooden board for rolling.</li>
          <li><strong>Tercios</strong> – Palm-bark bales (yagua) used to age wrappers.</li>
          <li><strong>Tiempos</strong> – Families of filler leaves: Volado (light), Seco (medium), Ligero (strong), Medio Tiempo (extra strong).</li>
          <li><strong>Torcedor(a)</strong> – Skilled cigar roller.</li>
          <li><strong>Torpedo</strong> – Cigar tapering to a sharp point.</li>
          <li><strong>Totalmente A Mano</strong> – “Totally by hand,” Cuban phrase for fully handmade cigars.</li>
          <li><strong>Tripa</strong> – Filler leaves.</li>
          <li><strong>Tripa Corta / Tripa Larga</strong> – Short filler vs. long filler leaves.</li>
          <li><strong>Triple Cap</strong> – Three-layered wrapper at cigar head.</li>
          <li><strong>Tubo</strong> – Protective metal tube for cigars.</li>
          <li><strong>Tunneling</strong> – Burn defect where filler burns faster than wrapper.</li>
        </ul>

        <h2 id="U" className="text-2xl font-semibold text-[#ff9800] mb-4">U</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Upmann (H. Upmann)</strong> – Classic Cuban brand, founded 1844, still active.</li>
        </ul>

        <h2 id="V" className="text-2xl font-semibold text-[#ff9800] mb-4">V</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>V-Cut</strong> – Cutter making v-shaped cut.</li>
          <li><strong>Vegas De Primera</strong> – Approved first-class Cuban fields.</li>
          <li><strong>Veguero</strong> – Cuban tobacco farmer.</li>
          <li><strong>Vein</strong> – Visible veins in wrapper; heavy veins are unattractive.</li>
          <li><strong>Vitola</strong> – Cigar format (size/shape designation). In Cuba, also factory naming convention.</li>
          <li><strong>Volado</strong> – Bottom leaves; mild, combustion aid.</li>
          <li><strong>Vuelta Abajo</strong> – Premier Cuban region, grows all leaf types.</li>
          <li><strong>Vuelta Arriba</strong> – Historic Cuban region (eastern), first discovered by Columbus.</li>
        </ul>

        <h2 id="W" className="text-2xl font-semibold text-[#ff9800] mb-4">W</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Wood Aging</strong> – Process of barrel-aging cigars for flavor.</li>
          <li><strong>Wrapper / Capa</strong> – Outermost tobacco leaf, contributes greatly to flavor and appearance.</li>
        </ul>

        <h2 id="Y" className="text-2xl font-semibold text-[#ff9800] mb-4">Y</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Yagua</strong> – Palm bark used to wrap tercios.</li>
        </ul>

        <h2 id="Z" className="text-2xl font-semibold text-[#ff9800] mb-4">Z</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Zafado</strong> – Loosening tobacco leaves after unpacking from gavillas.</li>
        </ul>

      </div>
    </div>
  );
}
