"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../signup/lib/firebase";

export default function SubAdminPage() {
  const [admins, setAdmins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [adminEmail, setAdminEmail] = useState("");

  useEffect(() => {
    loadAdmins();
  }, []);

  async function loadAdmins() {
    const snapshot = await getDocs(collection(db, "admins"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setAdmins(data);
    setLoading(false);
  }

  async function saveAdmin() {
    if (!adminEmail) {
      return alert("Enter admin email");
    }

    await setDoc(doc(db, "admins", adminEmail), {
      email: adminEmail,
    });

    alert("Sub Admin Added Successfully");

    setAdminEmail("");

    loadAdmins();
  }

  async function deleteAdmin(email: string) {
    if (!confirm("Delete this admin?")) return;

    await deleteDoc(doc(db, "admins", email));

    loadAdmins();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-10">
        <div className="mx-auto mb-6 max-w-3xl">
  <Link href="/dashboard">
    <button className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-blue-600">
      ← Back to Dashboard
    </button>
  </Link>
</div>
      <div className="mx-auto max-w-3xl rounded-3xl bg-white/90 backdrop-blur-md border border-white/50 p-8 shadow-2xl">
        <h1 className="text-3xl font-bold">
          Sub Admin Management
        </h1>

        <p className="mt-2 text-gray-500">
          Add or Remove Sub Admins
        </p>

        <div className="mt-8">
          <label className="mb-2 block font-semibold">
            Admin Email
          </label>

          <input
            type="email"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            placeholder="admin@gmail.com"
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />

          <button
            onClick={saveAdmin}
            className="mt-5 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Save as Admin
          </button>
        </div>

        <div className="mt-10">
          <h2 className="mb-5 text-2xl font-bold">
            Current Sub Admins
          </h2>

          {loading ? (
            <p>Loading...</p>
          ) : admins.length === 0 ? (
            <p className="text-gray-500">
              No Sub Admin Found
            </p>
          ) : (
            <div className="space-y-4">
  {admins.map((admin: any) => (
    <div
      key={admin.id}
      className="flex w-full items-center justify-between rounded-xl border border-gray-300 bg-gray-50 p-4"
    >
      <div className="flex-1">
        <p className="font-semibold text-black break-all">
          <p>{admin.id}</p>
        </p>
      </div>

      <button
        onClick={() => deleteAdmin(admin.email)}
        className="ml-4 rounded-lg bg-red-600 px-5 py-2 font-semibold text-black shadow hover:bg-red-700"
      >
        🗑 Delete
      </button>
    </div>
  ))}
</div>
          )}
        </div>
      </div>
    </div>
  );
}