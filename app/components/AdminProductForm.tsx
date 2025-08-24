"use client";

import { useState } from "react";
import { db, storage } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AdminProductForm() {
  const [name, setName] = useState("");
  const [badge, setBadge] = useState("");
  const [category, setCategory] = useState("Awarded Cigars");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let imageUrl = "";
      if (image) {
        const imageRef = ref(storage, `products/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, "products"), {
        name,
        badge,
        category,
        image: imageUrl,
      });

      alert("✅ Product added!");
      setName("");
      setBadge("");
      setCategory("Awarded Cigars");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("❌ Error adding product");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow space-y-4 max-w-lg"
    >
      <h2 className="text-xl font-bold">Add New Product</h2>

      {/* Product Name */}
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />

      {/* Badge */}
      <input
        type="text"
        placeholder="Badge (optional)"
        value={badge}
        onChange={(e) => setBadge(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      >
        <option>Awarded Cigars</option>
        <option>New World Cigars</option>
        <option>Machine-Made Cigars</option>
        <option>Flavoured Cigars</option>
        <option>Samplers</option>
        <option>Accessories</option>
      </select>

      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="w-full"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#000100] text-[#ff9800] px-4 py-2 rounded hover:bg-white hover:text-black transition"
      >
        Add Product
      </button>
    </form>
  );
}
