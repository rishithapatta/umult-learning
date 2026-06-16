import Image from "next/image";
import Link from "next/link";

export default function Home() {
return (
<main className="bg-white min-h-screen flex flex-col">

  {/* Logo Header */}
  <div className="w-full bg-black flex justify-center py-2">
    <Image
      src="/logo.png"
      alt="UMult Logo"
      width={120}
      height={120}
      priority
    />
  </div>

  {/* Hero Section */}
  <section className="text-center px-6 py-8">

    <h1 className="text-4xl md:text-5xl font-bold">
      UMult Learning
    </h1>

    <p className="text-lg text-gray-600 mt-2">
      One You. Endless Skills.
    </p>

    <p className="mt-5 max-w-3xl mx-auto text-gray-700 leading-7">
      Access free learning materials, Internship opportunities,
      Job updates, Career roadmaps, Resume templates, and
      Interview preparation resources—all in one place.
    </p>

  </section>

  {/* Cards Section */}
  <section className="max-w-6xl mx-auto px-6 pb-12 w-full">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Materials */}
      <Link
        href="/materials"
        className="group border rounded-2xl p-6 shadow-sm bg-white
        hover:shadow-2xl hover:-translate-y-2 hover:border-black
        transition-all duration-300 flex flex-col min-h-[220px]"
      >
        <h2 className="text-2xl font-bold mb-3">
          Materials
        </h2>

        <p className="text-gray-600">
          Notes, PDFs, Guides and Learning resources.
        </p>

        <div className="mt-auto pt-6">
          <span
            className="inline-block bg-black text-white px-4 py-2 rounded-lg
            group-hover:scale-105 transition-transform duration-300"
          >
            Open
          </span>
        </div>
      </Link>

      {/* Internships & Jobs */}
      <Link
        href="/internship-jobs"
        className="group border rounded-2xl p-6 shadow-sm bg-white
        hover:shadow-2xl hover:-translate-y-2 hover:border-black
        transition-all duration-300 flex flex-col min-h-[220px]"
      >
        <h2 className="text-2xl font-bold mb-3">
          Internships & Jobs
        </h2>

        <p className="text-gray-600">
          Explore Internships, Jobs and Career opportunities.
        </p>

        <div className="mt-auto pt-6">
          <span
            className="inline-block bg-black text-white px-4 py-2 rounded-lg
            group-hover:scale-105 transition-transform duration-300"
          >
            Open
          </span>
        </div>
      </Link>

      {/* Career Resources */}
      <Link
        href="/career-resources"
        className="group border rounded-2xl p-6 shadow-sm bg-white
        hover:shadow-2xl hover:-translate-y-2 hover:border-black
        transition-all duration-300 flex flex-col min-h-[220px]"
      >
        <h2 className="text-2xl font-bold mb-3">
          Career Resources
        </h2>

        <p className="text-gray-600">
          Roadmaps, Resume templates and Interview preparation resources.
        </p>

        <div className="mt-auto pt-6">
          <span
            className="inline-block bg-black text-white px-4 py-2 rounded-lg
            group-hover:scale-105 transition-transform duration-300"
          >
            Open
          </span>
        </div>
      </Link>

    </div>

  </section>

  {/* Footer */}
  <footer className="bg-black text-white mt-auto">

    <div className="max-w-6xl mx-auto px-6 py-4 text-center">

      <h3 className="text-lg font-semibold">
        Follow Us On Instagram
      </h3>

      <a
        href="https://instagram.com/umult.learning"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors mt-2 inline-block"
      >
        @umult.learning
      </a>

      <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">

        <Link
          href="/materials"
          className="hover:text-gray-300 transition-colors"
        >
          Materials
        </Link>

        <Link
          href="/internship-jobs"
          className="hover:text-gray-300 transition-colors"
        >
          Internships & Jobs
        </Link>

        <Link
          href="/career-resources"
          className="hover:text-gray-300 transition-colors"
        >
          Career Resources
        </Link>

      </div>

      <p className="text-gray-500 text-sm mt-4">
        © 2026 UMult Learning. All Rights Reserved.
      </p>

    </div>

  </footer>

</main>

);
}