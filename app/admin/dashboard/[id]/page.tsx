"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../signup/lib/firebase";

export default function AdminProjectDashboard() {

  const params = useParams();
  const id = params.id as string;

  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (id) {
      loadProject();
    }
  }, [id]);

  async function loadProject() {

    try {

      const snap = await getDoc(
        doc(db, "orders", id)
      );

      if (snap.exists()) {

        const data = {
          id: snap.id,
          ...snap.data(),
        };

        setProject(data);
        setStatus((data as any).status || "Pending");

      }

      setLoading(false);

    } catch (err) {

      console.log(err);
      setLoading(false);

    }

  }
async function updateStatus(newStatus: string) {
  console.log("Updating to:", newStatus);

  setStatus(newStatus);

  try {
    await updateDoc(doc(db, "orders", id), {
      status: newStatus,
    });

    console.log("Firestore updated successfully");

    setProject({
      ...project,
      status: newStatus,
    });

  } catch (err) {
    console.log(err);
  }
}
  async function saveStatus() {

    try {

      await updateDoc(
        doc(db, "orders", id),
        {
          status,
        }
      );

      alert("Status Updated Successfully");

      loadProject();

    } catch (err) {

      console.log(err);

    }

  }

  if (loading) {

    return (

      <div className="flex min-h-screen items-center justify-center">

        <h1 className="text-3xl font-bold">
          Loading Project...
        </h1>

      </div>

    );

  }

  if (!project) {

    return (

      <div className="flex min-h-screen items-center justify-center">

        <h1 className="text-3xl font-bold text-red-600">
          Project Not Found
        </h1>

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-7xl p-8">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              Order Details
            </h1>

            <p className="mt-2 text-gray-500">
              Manage Client Project
            </p>

          </div>

          <Link href="/dashboard">

            <button className="rounded-lg bg-gray-700 px-6 py-3 text-white hover:bg-gray-800">

              ← Back

            </button>

          </Link>

        </div>
                {/* Information */}

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Client */}

          <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="mb-6 text-2xl font-bold">
              Client Information
            </h2>

            <div className="space-y-4">

              <div>
                <p className="text-sm text-gray-500">
                  Owner Name
                </p>

                <p className="font-semibold">
                  {project.ownerName}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="font-semibold">
                  {project.userEmail}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Phone
                </p>

                <p className="font-semibold">
                  {project.phone}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Country
                </p>

                <p className="font-semibold">
                  {project.country}
                </p>
              </div>

            </div>

          </div>

          {/* Business */}

          <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="mb-6 text-2xl font-bold">
              Business Information
            </h2>

            <div className="space-y-4">

              <div>

                <p className="text-sm text-gray-500">
                  Business Name
                </p>

                <p className="font-semibold">
                  {project.businessName}
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Website
                </p>

                <a
                  href={project.website}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  {project.website}
                </a>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Google Business
                </p>

                <p className="font-semibold break-all">
                  {project.gmb}
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Main Keyword
                </p>

                <p className="font-semibold">
                  {project.keywords}
                </p>

              </div>

            </div>

          </div>

        </div>
                {/* Project Information */}

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-6 shadow">

            <p className="text-sm text-gray-500">
              Service
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              {project.service}
            </h2>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow">

            <p className="text-sm text-gray-500">
              Package
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              {project.package}
            </h2>

          </div>

        </div>

        {/* Status */}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-6 text-2xl font-bold">
            Project Status
          </h2>

          <span
            className={`mb-6 inline-block rounded-full px-5 py-2 font-semibold
            ${
              project.status === "Completed"
                ? "bg-green-100 text-green-700"
                : project.status === "In Progress"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {project.status}
          </span>

          <div className="mt-6">

            <label className="mb-2 block font-semibold">
              Change Status
            </label>

            <select
  value={status}
  onChange={(e)=>updateStatus(e.target.value)}
  className="w-full rounded-lg border p-3"
>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
            <p className="mt-2 text-red-600">
Current Status State: {status}
</p>

          </div>
          
        </div>
                {/* Address */}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-4 text-2xl font-bold">
            Address
          </h2>

          <p className="text-gray-700">
            {project.address || "No address provided"}
          </p>

        </div>

        {/* Description */}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-4 text-2xl font-bold">
            Project Description
          </h2>

          <p className="whitespace-pre-wrap text-gray-700">
            {project.description || "No description provided"}
          </p>

        </div>

      </div>

    </div>

  );
}