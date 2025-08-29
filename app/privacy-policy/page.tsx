"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-white p-8 rounded-lg shadow-md leading-relaxed text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-[#ff9800]">
          Privacy Policy for The Cigar Manor
        </h1>

        <p>
          At <strong>The Cigar Manor</strong>, accessible from{" "}
          <a
            href="http://www.thecigarmanor.co.uk"
            className="text-[#ff9800] font-semibold"
          >
            www.thecigarmanor.co.uk
          </a>
          , one of our main priorities is the privacy of our visitors.
        </p>

        <h2 className="text-2xl font-semibold">Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree
          to its terms.
        </p>

        <h2 className="text-2xl font-semibold">Information We Collect</h2>
        <p>
          The personal information that you are asked to provide, and the reasons
          why, will be made clear at the point we request it.
        </p>

        <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our services</li>
          <li>Develop new products and functionality</li>
          <li>Communicate with you directly or via partners</li>
        </ul>

        <h2 className="text-2xl font-semibold">GDPR Data Protection Rights (Europe)</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Right to access</li>
          <li>Right to rectification</li>
          <li>Right to erasure</li>
          <li>Right to object to processing</li>
          <li>Right to data portability</li>
        </ul>
      </div>
    </div>
  );
}
