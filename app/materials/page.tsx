"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";

type Material = {
id: string;
title: string;
fileName: string;
uploadedAt: number;
};

export default function MaterialsPage() {
const [materials, setMaterials] = useState<Material[]>([]);
const [search, setSearch] = useState("");

useEffect(() => {
const fetchMaterials = async () => {
try {
const q = query(
collection(db, "materials"),
orderBy("uploadedAt", "desc")
);

    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Material, "id">),
    }));

    setMaterials(data);
  } catch (error) {
    console.error("Error fetching materials:", error);
  }
};

fetchMaterials();

}, []);

const filteredMaterials = materials.filter((material) =>
material.title.toLowerCase().includes(search.toLowerCase())
);

return (
<main className="min-h-screen bg-gray-100">

  {/* Header */}
  <div className="bg-black text-white">
    <div className="max-w-6xl mx-auto px-6 py-6">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            Materials
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            Find and download study materials, notes & guides
          </p>
        </div>

        <img
          src="/logo.png"
          alt="UMult Learning Logo"
          className="h-24 w-auto"
        />

      </div>

      {/* Search */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Search materials..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

    </div>
  </div>

  {/* Materials */}
  <div className="max-w-6xl mx-auto p-6">

    <div className="grid gap-4">

      {filteredMaterials.length > 0 ? (
        filteredMaterials.map((material) => (
          <div
            key={material.id}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm
            hover:shadow-xl hover:-translate-y-1 transition-all duration-300
            flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >

            {/* Title */}
            <div className="flex-1">
              <h2 className="text-black font-semibold text-lg break-words">
                📄 {material.title}
              </h2>
            </div>

            {/* Download Button */}
            <div className="md:min-w-[170px]">
              <a
                href={`/pdfs/${material.fileName}`}
                download
                className="w-full md:w-auto inline-flex justify-center
                bg-black text-white px-5 py-3 rounded-lg
                hover:scale-105 hover:opacity-90
                transition-all duration-300"
              >
                Download PDF
              </a>
            </div>

          </div>
        ))
      ) : (
        <div className="bg-white border rounded-xl p-6 text-center text-gray-600">
          No materials found.
        </div>
      )}

    </div>

  </div>

</main>

);
}