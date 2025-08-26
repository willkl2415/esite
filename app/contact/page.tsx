"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Page Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Contact Cigar Manor
      </h1>

      {/* Contact Form + Office Info */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#000100]">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
            />
            <button
              type="submit"
              className="w-full bg-[#000100] text-[#ff9800] font-semibold py-3 rounded-lg hover:bg-[#ff9800] hover:text-[#000100] transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Office Info */}
        <div className="bg-[#ff9800] rounded-xl shadow-lg p-8 text-[#000100]">
          <h2 className="text-2xl font-bold mb-6">The Manor</h2>
          <p className="mb-4">
            Ithaca House, 27 Romford Road, E15 4LJ, London
          </p>
          <p className="mb-2 font-semibold">Phone:</p>
          <p className="mb-4">+44 07827 133 622</p>
          <p className="mb-2 font-semibold">Email:</p>
          <p className="mb-4">contact@cigarmanor.co.uk</p>
          <p className="mb-2 font-semibold">Opening Hours:</p>
          <p>Mon to Fri – 10:00 am to 6:00 pm</p>
        </div>
      </div>

      {/* Lifestyle Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-3">🏛 The Manor Experience</h3>
          <p className="text-gray-700">
            Step inside our world. Call ahead, come over, and hand-select your
            cigars in person. No rush, no stress — just the ritual of choosing
            what speaks to you.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-3">📦 Click. Collect. Connect.</h3>
          <p className="text-gray-700">
            Shop online, pick up at The Manor. Instant access, zero waiting.
            It’s the convenience you expect, with the exclusivity you deserve.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-3">🚚 Complimentary Delivery</h3>
          <p className="text-gray-700">
            Enjoy free UK delivery on orders over £50. Because when you move
            with taste, the details follow.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-3">✨ Stay Connected</h3>
          <p className="text-gray-700">
            Call us. Write us. Walk through our doors. However you reach out,
            you’re not just contacting us — you’re stepping into the lifestyle.
          </p>
        </div>
      </div>

      {/* Map Embed */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9931.05737301236!2d-0.0119286!3d51.5432411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a6d3b715f67f%3A0x55f0e5e0640b2f62!2sIthaca%20House%2C%2027%20Romford%20Rd%2C%20London%20E15%204LJ!5e0!3m2!1sen!2suk!4v1693151234567"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
