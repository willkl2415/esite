export default function RefundsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white p-10 rounded-lg shadow-md leading-relaxed text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-[#ff9800]">
          Refunds & Returns Procedure
        </h1>
        <p>
          In all of the cases outlined below, please include your{" "}
          <strong>order number</strong> so we know who you are, and also let us
          know if you want a <strong>replacement</strong>,{" "}
          <strong>exchange</strong> or a <strong>refund</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Unused and Undamaged Products
        </h2>
        <p>
          Products in perfect, unused condition can be returned for refund or
          exchange within <strong>14 days</strong> of the purchase date. The goods
          must be received by us before a refund or exchange can be issued. Written
          confirmation of cancellation is required (Consumer Contracts Regulations
          2013). Delivery charges are not refunded for returned orders.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Damaged Products</h2>
        <p>
          Damaged products can be returned for refund or exchange within{" "}
          <strong>14 days</strong> of purchase OR within the manufacturer’s
          warranty period (e.g. lighters). All damaged goods must be reported and
          returned before a refund or replacement can be issued.
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 my-4">
          <p className="font-semibold text-yellow-700">
            🚭 Important: Any cigars that have been smoked or disposed of cannot
            be replaced.
          </p>
          <p>
            If you find an issue with your cigar, stop smoking it, contact us, and
            we’ll send you a returns bag. A replacement is only issued once the
            cigar is returned and inspected.
          </p>
        </div>
        <p>
          If a single cigar from a pack arrives damaged we will replace{" "}
          <strong>only the single cigar</strong>, not the entire pack.
        </p>
        <p>
          Refunds include the initial cost of standard postage. We usually cover
          return postage with a stamped returns bag or reimbursement (receipt
          required).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Products Undelivered</h2>
        <p>
          We will replace the product if undelivered within{" "}
          <strong>14 working days</strong> after an investigation has been opened
          with Royal Mail. Replacement products will be sent by{" "}
          <strong>Royal Mail Tracked 24</strong> or Courier.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Wrong Address</h2>
        <div className="bg-red-100 border-2 border-red-600 p-4 rounded-lg my-4">
          <p className="font-semibold text-red-700">
            ⚠️ Address Errors: Please double check your address before ordering!
          </p>
          <p>
            If the order is sent to the wrong address due to a customer error,{" "}
            <strong>you will be charged £3.95</strong> for resending.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Packing Errors</h2>
        <p>
          If the wrong product has been sent it must be returned before we can
          replace or refund it. (Postage costs are covered by us — we’ll normally
          send a stamped returns bag or reimburse you with proof of postage.)
        </p>
        <p>
          If part of the order is missing, the missing product will be sent out at
          no extra cost.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Returns Address</h2>
        <p className="font-semibold">The Cigar Manor Ltd</p>
        <p>Post Office Building</p>
        <p>182A Cardiff Road</p>
        <p>Newport Gwent</p>
        <p>NP20 3AE</p>
        <p className="mt-2">
          Always include your <strong>order number</strong> and{" "}
          <strong>reason for return</strong>. We recommend using{" "}
          <strong>tracked delivery</strong> and protective packaging to avoid
          further damage.
        </p>
        <p>
          If the return is not confirmed by Royal Mail or Courier, we cannot issue
          a refund or replacement.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Refund Timing</h2>
        <p>
          Refunds may take <strong>3–5 working days</strong> to appear in your
          bank account after we process the return and notify you by email or
          phone.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Need Help?</h2>
        <p>
          Not sure of anything? Contact us at{" "}
          <a
            href="mailto:info@thecigarmanor.co.uk"
            className="text-[#ff9800] font-semibold underline"
          >
            info@thecigarmanor.co.uk
          </a>
          .
        </p>
      </div>
    </div>
  );
}
