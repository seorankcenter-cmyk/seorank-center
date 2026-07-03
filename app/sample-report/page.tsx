export default function SampleReportPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-2xl bg-white p-10 shadow-xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          Local SEO Sample Report
        </h1>

        <p className="text-slate-500 mb-8">
          View one of our delivered client reports.
        </p>

        <a
          href="https://docs.google.com/spreadsheets/d/17KXyvM6gP2PqiXR1TLe855G13wUa0UrurBzJfuEkKic/edit?gid=1088077956#gid=1088077956"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-cyan-600 px-8 py-4 text-white font-semibold hover:bg-cyan-700"
        >
          View Sample Report
        </a>
      </div>
    </div>
  );
}