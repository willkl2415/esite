"use client";

export default function ReturnsPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Returns & Refunds</h1>
      <p className="mb-4">
        We want you to be delighted with your purchase. If you are not fully
        satisfied, you can return your order within 14 days for a full refund or
        exchange.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Items must be unused and in their original packaging.</li>
        <li>
          Contact our support team before sending any items back for return
          authorization.
        </li>
        <li>
          Refunds will be processed within 5–7 working days of receiving your
          return.
        </li>
      </ul>
    </main>
  );
}
