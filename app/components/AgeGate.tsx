"use client";

import { useEffect, useState } from "react";

export default function AgeGate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("ageConfirmed");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleResponse = (isOfAge: boolean) => {
    if (isOfAge) {
      localStorage.setItem("ageConfirmed", "true");
      setVisible(false);
    } else {
      window.location.href = "https://www.drinkaware.co.uk/"; // Redirect for underage
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Age Restricted Website
        </h2>
        <p className="mb-6 text-gray-700">
          You must be 18 years or over to view this website.
        </p>
        <div className="flex justify-center gap-6 mb-4">
          <button
            onClick={() => handleResponse(true)}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Yes
          </button>
          <button
            onClick={() => handleResponse(false)}
            className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400 transition"
          >
            No
          </button>
        </div>
        <label className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <input type="checkbox" defaultChecked disabled />
          Remember me
        </label>
      </div>
    </div>
  );
}
