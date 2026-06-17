"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";

type Resource = {
id: string;
title: string;
description: string;
link: string;
uploadedAt: number;
};

export default function CareerResourcesPage() {
const [resources, setResources] = useState<Resource[]>([]);
const [search, setSearch] = useState("");

useEffect(() => {
const fetchResources = async () => {
try {
const q = query(
collection(db, "career-resources"),
orderBy("uploadedAt", "desc")
);

    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Resource, "id">),
    }));

    setResources(data);
  } catch (error) {
    console.error("Error fetching resources:", error);
  }
};

fetchResources();

}, []);

const filteredResources = resources.filter(
(resource) =>
resource.title.toLowerCase().includes(search.toLowerCase()) ||
resource.description.toLowerCase().includes(search.toLowerCase())
);

return (
<main className="min-h-screen bg-gray-100">
{/* Header */}
<div className="bg-black text-white">
<div className="max-w-6xl mx-auto px-6 py-6">
<div className="flex items-center justify-between">
<div>
<h1 className="text-4xl font-bold">
Career Resources
</h1>

          <p className="text-gray-400 mt-2 text-sm">
            Roadmaps, resume templates and interview resources.
          </p>
        </div>

        <img
          src="/logo.png"
          alt="UMult Learning Logo"
          className="h-24 w-auto"
        />
      </div>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl text-black bg-white border border-gray-300 focus:outline-none"
        />
      </div>
    </div>
  </div>

  {/* Resource Cards */}
  <div className="max-w-6xl mx-auto p-6">
    <div className="space-y-4">
      {filteredResources.length > 0 ? (
        filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-center justify-between gap-4"
          >
            <div className="flex-1">
              <h2 className="text-black font-semibold">
                📄 {resource.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {resource.description}
              </p>
            </div>

            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-5 py-3 rounded-lg hover:opacity-90 transition whitespace-nowrap"
            >
              Open
            </a>
          </div>
        ))
      ) : (
        <div className="bg-white border rounded-xl p-6 text-center">
          No resources found.
        </div>
      )}
    </div>
  </div>
</main>

);
}