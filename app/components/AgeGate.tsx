"use client";

import { useEffect, useState } from "react";

export default function AgeGate() {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("ageVerified");
    if (stored === "true") {
      setIsVerified(true);
    }
  }, []);

  const handleYes = () => {
    localStorage.setItem("ageVerified", "true");
    setIsVerified(true);
  };

  const handleNo = () => {
    window.location.href = "https://www.google.com"; // boot them out
  };

  if (isVerified) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-white border-4 border-red-600 text-center max-w-md mx-auto p-8 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-red-700 mb-4">
          🚫 Age Restricted Website
        </h1>
        <p className="mb-4 text-gray-800 font-medium">
          You must be <span className="font-bold">18 years or over</span> to
          enter this website.
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={handleYes}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md"
          >
            I am over 18
          </button>
          <button
            onClick={handleNo}
            className="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-6 py-2 rounded-lg"
          >
            I am under 18
          </button>
        </div>
        <div className="mt-4">
          <label className="flex items-center justify-center text-sm text-gray-600">
            <input type="checkbox" className="mr-2" defaultChecked />
            Remember me
          </label>
        </div>
      </div>
    </div>
  );
}
