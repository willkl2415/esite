"use client";

import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#ff9800]">
        My Account
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* === Login Section === */}
        <div className="bg-white shadow-lg rounded-xl p-8 border">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Username or Email</label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ff9800]"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ff9800]"
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Remember me
              </label>
              <Link href="#" className="text-[#ff9800] hover:underline">
                Lost your password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-[#000100] text-white py-2 rounded-lg hover:bg-[#ff9800] hover:text-black transition"
            >
              Log In
            </button>
          </form>
        </div>

        {/* === Register Section === */}
        <div className="bg-white shadow-lg rounded-xl p-8 border">
          <h2 className="text-2xl font-semibold mb-6">Register</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Username</label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ff9800]"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ff9800]"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ff9800]"
                required
              />
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Subscribe to our newsletter
            </label>
            <button
              type="submit"
              className="w-full bg-[#ff9800] text-black py-2 rounded-lg hover:bg-black hover:text-white transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
