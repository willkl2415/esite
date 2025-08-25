"use client";

import { useState } from "react";

export default function AdminPage() {
  const [data, setData] = useState<unknown>(null);

  async function fetchData() {
    try {
      const res = await fetch("/api/admin");
      if (!res.ok) {
        throw new Error("Failed to fetch admin data");
      }
      const result: unknown = await res.json();
      setData(result);
    } catch (error) {
      console.error("Admin fetch error:", error);
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <button
        onClick={fetchData}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Load Admin Data
      </button>
      <pre className="mt-6 bg-gray-100 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
