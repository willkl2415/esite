"use client";

import { useState } from "react";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AdminProductForm from "../components/AdminProductForm";

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (err) {
      alert("Login failed. Please check credentials.");
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#ff9800]">
        <div className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4">
          <h1 className="text-2xl font-bold text-center">Admin Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <button
            onClick={login}
            className="w-full bg-[#000100] text-[#ff9800] px-4 py-2 rounded hover:bg-white hover:text-black"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ff9800] p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <AdminProductForm />
    </div>
  );
}
