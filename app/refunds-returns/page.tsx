"use client";

export default function RefundsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-white p-8 rounded-lg shadow-md leading-relaxed text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-[#ff9800]">
          Refunds & Returns Procedure
        </h1>

        <p>
          In all of the cases outlined below, please include your{" "}
          <strong>order number</strong> so we know who you are, and also let us
          know if you want a <strong>replacement</strong>,{" "}
          <strong>exchange</strong> or a <strong>refund</strong>.
        </p>

        <h2 className="text-2xl font-semibold">Unused and Undamaged Products</h2>
        <p>
          Products in perfect, unused condition can be returned for refund or
          exchange within <strong>14 days</strong> of the purchase date. The goods
          must be received by us before a refund or exchange can be issued.
        </p>

        <h2 className="text-2xl font-semibold">Damaged Products</h2>
        <p>
          Damaged products can be returned for refund or exchange within{" "}
          <strong>14 days</strong> of purchase OR within the manufacturer’s
          warranty period. All damaged goods must be reported and returned before a refund or replacement can be issued.
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 my-4">
          <p className="font-semibold text-yellow-700">
            🚭 Important: Any cigars that have been smoked or disposed of cannot be replaced.
          </p>
          <p>
            If you find an issue with your cigar, stop smoking it, contact us, and
            we’ll send you a returns bag. A replacement is only issued once the
            cigar is returned and inspected.
          </p>
        </div>

        <p>If a single cigar from a pack arrives damaged we will replace <strong>only the single cigar</strong>, not the entire pack.</p>

        <h2 className="text-2xl font-semibold">Products Undelivered</h2>
        <p>
          We will replace the product if undelivered within{" "}
          <strong>14 working days</strong> after an investigation has been opened with Royal Mail.
        </p>

        <h2 className="text-2xl font-semibold">Wrong Address</h2>
        <div className="bg-red-100 border-2 border-red-600 p-4 rounded-lg my-4">
          <p className="font-semibold text-red-700">
            ⚠️ Address Errors: Please double check your address before ordering!
          </p>
          <p>
            If the order is sent to the wrong address due to a customer error,{" "}
            <strong>you will be charged £3.95</strong> for resending.
          </p>
        </div>

        <h2 className="text-2xl font-semibold">Returns Address</h2>
        <p className="font-semibold">The Cigar Manor Ltd</p>
        <p>182A Cardiff Road, Newport Gwent, NP20 3AE</p>
      </div>
    </div>
  );
}
