export default function ViewerPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Header */}
      <div className="bg-black py-3 flex justify-center">
        <img
          src="/logo.png"
          alt="UMult Logo"
          className="h-28 w-auto"
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-4">

        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">
            Data Analyst Preparing Questions
          </h1>

          <a
            href="/pdfs/data-analyst-preparing-questions.pdf"
            download
            className="border px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <object
          data="/pdfs/data-analyst-preparing-questions.pdf"
          type="application/pdf"
          width="100%"
          height="900px"
          className="border rounded-xl"
        >
          <div className="p-6 text-center">
            <p className="mb-4">
              PDF preview is not supported in this browser.
            </p>

            <a
              href="/pdfs/data-analyst-preparing-questions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border px-4 py-2 rounded-lg"
            >
              Open PDF
            </a>
          </div>
        </object>

      </div>

    </main>
  );
}