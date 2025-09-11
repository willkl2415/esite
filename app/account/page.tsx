"use client";

import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#ff9800]">
        My Account Information
      </h1>

      {/* === Registration Form === */}
      <form className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white shadow-lg rounded-xl p-8 border">
        {/* Column 1 – Personal Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Your Personal Details</h2>
          <div>
            <label className="block mb-1">First Name *</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ff9800]"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Last Name *</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ff9800]"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Email Address *</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ff9800]"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Telephone *</label>
            <input
              type="tel"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ff9800]"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Company</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ff9800]"
            />
          </div>
        </div>

        {/* Column 2 – Address */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Your Address</h2>
          <div>
            <label className="block mb-1">Street Address *</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ff9800]"
              required
            />
          </div>
          <div>
            <label className="block mb-1">City *</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ff9800]"
              required
            />
          </div>
          <div>
            <label className="block mb-1">County / State *</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ff9800]"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Post Code *</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ff9800]"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Country *</label>
            <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ff9800]">
              <option value="">Select Country</option>
              <option value="UK">United Kingdom</option>
              <option value="US">United States</option>
              <option value="EU">Europe</option>
            </select>
          </div>
        </div>

        {/* Column 3 – Password + Extras */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Your Password</h2>
          <div>
            <label className="block mb-1">Password *</label>
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ff9800]"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Confirm Password *</label>
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ff9800]"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Cigar Newsletter
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Whisky Newsletter
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Pipe Tobacco Newsletter
            </label>
          </div>

          {/* reCAPTCHA Placeholder */}
          <div className="border rounded-lg p-4 text-center bg-gray-50">
            <span className="text-gray-500 text-sm">[ reCAPTCHA widget placeholder ]</span>
          </div>

          <div className="text-sm">
            By creating an account, you agree to our{" "}
            <Link href="#" className="text-[#ff9800] hover:underline">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#ff9800] hover:underline">
              Privacy Policy
            </Link>
            .
          </div>
          <button
            type="submit"
            className="w-full bg-[#ff9800] text-black py-2 rounded-lg hover:bg-black hover:text-white transition"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
