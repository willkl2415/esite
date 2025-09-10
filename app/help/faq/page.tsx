"use client";

const faqs = [
  {
    q: "How should I store my cigars?",
    a: "We recommend using a humidor to maintain humidity between 65–70%."
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we deliver to most countries worldwide. Delivery times vary."
  },
  {
    q: "Can I track my order?",
    a: "Yes, once dispatched you’ll receive tracking details by email."
  },
  {
    q: "Do you accept returns?",
    a: "Yes, within 14 days if items are unused and in original packaging."
  },
  {
    q: "How can I contact support?",
    a: "You can email us at support@cigarmanor.com or use the contact form."
  }
];

export default function FAQPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-semibold">{faq.q}</h2>
            <p className="text-gray-700 mt-2">{faq.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
