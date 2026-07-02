"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../signup/lib/firebase";

export default function ClientsPage() {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadClients();
  }, []);
const filteredClients = clients.filter((client: any) =>
  (
    (client.ownerName || "") +
    " " +
    (client.name || "") +
    " " +
    (client.email || "") +
    " " +
    (client.clientEmail || "")
  )
    .toLowerCase()
    .includes(search.toLowerCase())
);
  async function loadClients() {
    try {
      const snapshot = await getDocs(collection(db, "users"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setClients(data);

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              Clients
            </h1>

            <p className="text-gray-500">
              All Registered Clients
            </p>

          </div>

          <Link href="/dashboard">

            <button className="rounded-xl bg-gray-800 px-6 py-3 font-semibold text-white hover:bg-black">

              ← Dashboard

            </button>

          </Link>

        </div>
<div className="mb-6 flex justify-end">

  <input
    type="text"
    placeholder="Search by name or email..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full max-w-md rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
  />

</div>
        <div className="rounded-2xl bg-white p-6 shadow">

          {loading ? (

            <div className="py-20 text-center text-xl">

              Loading Clients...

            </div>

          ) : (

            <table className="w-full">

              <thead>

<tr className="border-b bg-slate-100">

<th className="p-4">Owner Name</th>

<th className="p-4">Email</th>

<th className="p-4">Phone</th>

<th className="p-4">Client ID</th>
<th>Action</th>

</tr>

</thead>

              <tbody>

{clients.map((client:any)=>(

<tr
key={client.id}
className="border-b hover:bg-gray-50"
>

<td className="p-4 font-semibold">
{client.ownerName || "-"}
</td>

<td className="p-4">
{client.email}
</td>

<td className="p-4">
{client.phone || "-"}
</td>

<td className="p-4">

<span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700">

{client.clientId || "-"}

</span>

</td>
<Link href={`/admin/clients/${client.clientId}`}>
  <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
    View Details
  </button>
</Link>
</tr>

))}

</tbody>

            </table>

          )}

        </div>

      </div>

    </div>
  );
}