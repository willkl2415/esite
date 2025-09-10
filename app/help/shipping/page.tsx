"use client";

export default function ShippingPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Shipping Information</h1>
      <p className="mb-4">
        We deliver cigars and accessories across the UK and internationally.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>UK Standard Delivery: 2–3 working days.</li>
        <li>UK Express Delivery: Next working day if ordered before 2pm.</li>
        <li>International Delivery: 5–10 working days (subject to customs).</li>
        <li>Free delivery on orders over £100.</li>
      </ul>
    </main>
  );
}
