"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../signup/lib/firebase";

export default function ProjectDashboard() {
  const params = useParams();
  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  const [status, setStatus] = useState("");

  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [gmb, setGmb] = useState("");
  const [keywords, setKeywords] = useState("");
  const [service, setService] = useState("");
  const [packageName, setPackageName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const [reportLink, setReportLink] = useState("");
  const [adminNotes, setAdminNotes] = useState("");
  const [clientId, setClientId] = useState("");

  useEffect(() => {
    if (id) {
      loadProject();
    }
  }, [id]);

  async function loadProject() {
    try {
      const snap = await getDoc(doc(db, "orders", id));

      if (snap.exists()) {
        const data: any = snap.data();

        setBusinessName(data.businessName || "");
        setOwnerName(data.ownerName || "");
        setUserEmail(data.userEmail || "");
        setPhone(data.phone || "");
        setCountry(data.country || "");
        setWebsite(data.website || "");
        setGmb(data.gmb || "");
        setKeywords(data.keywords || "");
        setService(data.service || "");
        setPackageName(data.package || "");
        setAddress(data.address || "");
        setDescription(data.description || "");

        setStatus(data.status || "Pending");

        setReportLink(data.reportLink || "");
        setAdminNotes(data.adminNotes || "");
        setClientId(data.clientId || "");
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  async function saveProject() {
    try {
      await updateDoc(doc(db, "orders", id), {
        businessName,
        ownerName,
        userEmail,
        phone,
        country,
        website,
        gmb,
        keywords,
        service,
        package: packageName,
        address,
        description,
        status,
        reportLink,
        adminNotes,
      });

      alert("Project Updated Successfully");
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-3xl font-bold">
        Loading...
      </div>
    );
  }
    return (
    <div className="min-h-screen bg-slate-100 p-8 text-gray-900">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              Order Details
            </h1>

            <p className="text-gray-500">
              Manage client project
            </p>

          </div>

          <div className="flex gap-3">

  <Link href="/orders">
    <button className="rounded-xl bg-gray-800 px-6 py-3 font-semibold text-white hover:bg-black">
      ← Back
    </button>
  </Link>

  <button
    onClick={() => setEditMode(!editMode)}
    className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
  >
    {editMode ? "Cancel" : "Edit"}
  </button>

</div>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow">

  <h2 className="mb-5 text-2xl font-bold">
    Business Information
  </h2>

  <div className="space-y-4">

    <input
      value={ownerName}
      disabled={!editMode}
      onChange={(e)=>setOwnerName(e.target.value)}
      placeholder="Owner Name"
      className="w-full rounded-lg border p-3 disabled:bg-gray-100"
    />

    <input
      value={phone}
      disabled={!editMode}
      onChange={(e)=>setPhone(e.target.value)}
      placeholder="Phone Number"
      className="w-full rounded-lg border p-3 disabled:bg-gray-100"
    />

    <input
      value={businessName}
      disabled={!editMode}
      onChange={(e)=>setBusinessName(e.target.value)}
      placeholder="Business Name"
      className="w-full rounded-lg border p-3 disabled:bg-gray-100"
    />

    <input
      value={website}
      disabled={!editMode}
      onChange={(e)=>setWebsite(e.target.value)}
      placeholder="Website"
      className="w-full rounded-lg border p-3 disabled:bg-gray-100"
    />

    <input
      value={gmb}
      disabled={!editMode}
      onChange={(e)=>setGmb(e.target.value)}
      placeholder="Google Business Profile"
      className="w-full rounded-lg border p-3 disabled:bg-gray-100"
    />

    <input
      value={keywords}
      disabled={!editMode}
      onChange={(e)=>setKeywords(e.target.value)}
      placeholder="Main Keywords"
      className="w-full rounded-lg border p-3 disabled:bg-gray-100"
    />

  </div>

</div>

        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow">

            <p className="mb-2 font-semibold">
              Service
            </p>

            <input
              value={service}
              disabled={!editMode}
              onChange={(e)=>setService(e.target.value)}
              className="w-full rounded-lg border p-3 disabled:bg-gray-100 disabled:text-gray-600"
            />

          </div>

          <div className="rounded-2xl bg-white p-6 shadow">

            <p className="mb-2 font-semibold">
              Package
            </p>

            <input
  value={packageName}
  disabled={!editMode}
  onChange={(e)=>setPackageName(e.target.value)}
  className="w-full rounded-lg border p-3 disabled:bg-gray-100 disabled:text-gray-600"
/>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow">

            <p className="mb-2 font-semibold">
              Status
            </p>

            <select
  value={status}
  onChange={(e)=>setStatus(e.target.value)}
  className="w-full rounded-lg border p-3"
>  <option>Awaiting Payment</option>
  <option>Pending</option>
  <option>In Progress</option>
  <option>Completed</option>
  <option>Cancelled</option>
</select>

          </div>

        </div>
                <div className="mt-6 rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-4 text-2xl font-bold">
            Address
          </h2>

          <textarea
  value={address}
  disabled={!editMode}
  onChange={(e)=>setAddress(e.target.value)}
  className="w-full rounded-lg border p-3 disabled:bg-gray-100 disabled:text-gray-600"
/>

        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-4 text-2xl font-bold">
            Description
          </h2>

          <textarea
  value={description}
  disabled={!editMode}
  onChange={(e)=>setDescription(e.target.value)}
  rows={6}
  className="w-full rounded-lg border p-3 disabled:bg-gray-100 disabled:text-gray-600"
/>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="mb-4 text-2xl font-bold">
              Report Link
            </h2>

            <input
  type="text"
  value={reportLink}
  disabled={!editMode}
  onChange={(e)=>setReportLink(e.target.value)}
  placeholder="Paste Excel / Google Sheets Link"
  className="w-full rounded-lg border p-3 disabled:bg-gray-100 disabled:text-gray-600"
/>

            {reportLink && (
              <a
                href={reportLink}
                target="_blank"
                className="mt-4 inline-block text-blue-600 underline"
              >
                Open Report
              </a>
            )}

          </div>
          <div className="rounded-2xl bg-white p-6 shadow">

  <h2 className="mb-4 text-2xl font-bold">
    Client ID
  </h2>

  <input
value={clientId}
disabled
className="w-full rounded-lg border bg-gray-100 p-3 font-bold text-blue-600"
/>
</div>

          <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="mb-4 text-2xl font-bold">
              Admin Notes
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow">


</div>

            <textarea
  value={adminNotes}
  disabled={!editMode}
  onChange={(e)=>setAdminNotes(e.target.value)}
  rows={4}
  placeholder="Write notes..."
  className="w-full rounded-lg border p-3 disabled:bg-gray-100 disabled:text-gray-600"
/>

          </div>

        <div className="mt-8 flex justify-end">

          {editMode && (

<button
  onClick={saveProject}
  className="rounded-xl bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700"
>
  Save Changes
</button>

)}

        </div>

      </div>

    </div>
  );
}