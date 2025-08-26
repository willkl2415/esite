"use client";

export default function ContactPage() {
  return (
    <div className="bg-[#ff9800] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Page Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#000100] mb-12">
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
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#000100]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#000100]"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#000100]"
              />
              <button
                type="submit"
                className="w-full bg-[#000100] text-[#ff9800] font-semibold py-3 rounded-lg hover:bg-white hover:text-[#000100] transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Office Info */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-[#000100]">
            <h2 className="text-2xl font-bold mb-6">Our Locations</h2>

            <p className="mb-4">
              <strong>Bristol – Havana Cigar Specialist</strong>
              <br />
              35 Baldwin Street, Bristol BS1 1RG
              <br />
              Tel: 0117 462 2767
            </p>

            <p className="mb-4">
              <strong>Newport – Havana Cigar Point</strong>
              <br />
              The Cigar Manor Ltd, 182a Cardiff Rd, Newport NP20 3AE
              <br />
              Tel: 0117 462 2767
            </p>

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

        {/* Generic Google Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19893.089162099226!2d-0.127758!3d51.507351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1693151234567"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
