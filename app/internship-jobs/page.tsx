"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";

type Job = {
  id: string;
  title: string;
  company: string;
  type: string;
  applyLink: string;
  uploadedAt: number;
};

export default function InternshipJobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const q = query(
          collection(db, "jobs"),
          orderBy("uploadedAt", "desc")
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Job, "id">),
        }));

        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">
                Internships & Jobs
              </h1>

              <p className="text-gray-400 mt-2 text-sm">
                Latest internship and job opportunities.
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
              placeholder="Search opportunities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-4 rounded-xl text-black bg-white border border-gray-300 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex justify-between items-center"
              >
                <div>
                  <h2 className="text-black font-semibold">
                   📄 {job.title}
                  </h2>

                  <p className="text-gray-600 mt-1">
                    {job.company}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {job.type}
                  </p>
                </div>

                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-5 py-3 rounded-lg hover:opacity-90 transition"
                >
                  Apply Now
                </a>
              </div>
            ))
          ) : (
            <div className="bg-white border rounded-xl p-6 text-center">
              No opportunities found.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}