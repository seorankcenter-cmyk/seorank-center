"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../signup/lib/firebase";

export default function ClientProjectDashboard() {
  const params = useParams();
  const id = params.id as string;

  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadProject();
    }
  }, [id]);

  async function loadProject() {
    try {
      const snap = await getDoc(doc(db, "orders", id));

      if (snap.exists()) {
        setProject({
          id: snap.id,
          ...snap.data(),
        });
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl font-bold text-red-600">
        Project Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-gray-900">
      <div className="mx-auto max-w-6xl text-black">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Project Dashboard
            </h1>

            <p className="text-gray-500">
              View your project details
            </p>
          </div>

          <Link href="/client-dashboard">
  <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700">
    ← Back to Dashboard
  </button>
</Link>
        </div>
                <div className="grid gap-6 lg:grid-cols-2">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md text-black">

            <h2 className="mb-5 text-2xl font-bold">
              Client Information
            </h2>

            <div className="space-y-3">

              <p className="text-gray-700">
  <span className="font-semibold text-slate-900">Owner:</span>{" "}
  {project.ownerName}
</p>

<p className="text-gray-700">
  <span className="font-semibold text-slate-900">Email:</span>{" "}
  {project.userEmail}
</p>

<p className="text-gray-700">
  <span className="font-semibold text-slate-900">Phone:</span>{" "}
  {project.phone}
</p>

<p className="text-gray-700">
  <span className="font-semibold text-slate-900">Country:</span>{" "}
  {project.country}
</p>

            </div>

          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md text-black">

            <h2 className="mb-5 text-2xl font-bold">
              Business Information
            </h2>

            <div className="space-y-3">

              <p className="text-gray-700">
  <span className="font-semibold text-slate-900">Business:</span>{" "}
  {project.businessName}
</p>

<p className="text-gray-700">
  <span className="font-semibold text-slate-900">Google Business:</span>{" "}
  {project.gmb}
</p>

<p className="text-gray-700">
  <span className="font-semibold text-slate-900">Main Keyword:</span>{" "}
  {project.keywords}
</p>

            </div>

          </div>

        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md text-black">

            <p className="text-gray-500">Service</p>

            <h2 className="mt-2 text-xl font-bold">
              {project.service}
            </h2>

          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md text-black">

            <p className="text-gray-500">Package</p>

            <h2 className="mt-2 text-xl font-bold">
              {project.package}
            </h2>

          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md text-black">

            <p className="text-gray-500">Project Status</p>

            <span className="mt-3 inline-block rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
              {project.status}
            </span>

          </div>

        </div>
                <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-md text-black">

          <h2 className="mb-4 text-2xl font-bold">
            Address
          </h2>

          <p>
            {project.address || "No address provided"}
          </p>

        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-md text-black">

          <h2 className="mb-4 text-2xl font-bold">
            Description
          </h2>

          <p className="whitespace-pre-wrap">
            {project.description || "No description provided"}
          </p>

        </div>
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-md">

  <h2 className="mb-4 text-2xl font-bold">
    Report Link
  </h2>

  {project.reportLink ? (
    <a
      href={project.reportLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
    >
      📊 Open Report Link
    </a>
  ) : (
    <p className="text-gray-500">
      Report not uploaded yet.
    </p>
  )}

</div>

      </div>
    </div>
  );
}