"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../signup/lib/firebase";

export default function DashboardPage() {
    const [orders, setOrders] = useState<any[]>([]);
const [clients, setClients] = useState<any[]>([]);
const [search, setSearch] = useState("");
const OWNER_EMAIL = "seorankcenter@gmail.com";
const [currentUser, setCurrentUser] = useState<any>(null);

useEffect(() => {
  loadDashboard();
}, []);
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
  });

  return () => unsubscribe();
}, []);

async function loadDashboard(){
  try {
    const orderSnap = await getDocs(collection(db, "orders"));

    const orderData = orderSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

console.log(orderData);
    setOrders(orderData);

    const clientSnap = await getDocs(collection(db, "users"));

    const clientData = clientSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setClients(clientData);

  } catch (error) {
    console.log(error);
  }
}
const filteredOrders = orders.filter((order: any) =>
 (
  order.clientId +
  " " +
  order.dashboardName +
  " " +
  order.ownerName +
  " " +
  order.userEmail +
  " " +
  order.businessName
)
    .toLowerCase()
    .includes(search.toLowerCase())
);
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 p-6 text-white">

        <h1 className="mb-8 text-2xl font-bold">
          SEORank Center
        </h1>

        <nav className="space-y-3">

          <Link href="/dashboard">
            <button className="w-full rounded-lg bg-blue-600 p-3 text-left font-semibold">
              📊 Dashboard
            </button>
          </Link>

          <Link href="/clients">
            <button className="w-full rounded-lg bg-slate-800 p-3 text-left hover:bg-blue-600">
              👥 Clients
            </button>
          </Link>

          <Link href="/orders">
            <button className="w-full rounded-lg bg-slate-800 p-3 text-left hover:bg-blue-600">
              📦 Orders
            </button>
          </Link>
          {currentUser?.email === OWNER_EMAIL && (
  <Link href="/dashboard/sub-admin">
    <button className="w-full rounded-lg bg-slate-800 p-3 text-left hover:bg-blue-600">
      👤 Sub Admin
    </button>
  </Link>
)}
          
          <Link href="/payments">
            <button className="w-full rounded-lg bg-slate-800 p-3 text-left hover:bg-blue-600">
              💳 Payments
            </button>
          </Link>

        </nav>

      </aside>

      {/* Main */}
      <main className="flex-1 p-8">

        {/* Navbar */}
        <div className="mb-8 flex items-center justify-between rounded-2xl bg-white p-6 shadow">

          <div>
            <h2 className="text-4xl font-bold text-black">
              Admin Dashboard
            </h2>

            <p className="text-gray-500">
              Welcome back, Admin 👋
            </p>
          </div>

          <div className="flex gap-3">

            <input
  type="text"
  placeholder="Search by client, email or business..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="rounded-xl border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
/>

          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="font-semibold text-slate-700">
              Total Orders
            </p>

            <h2 className="mt-3 text-5xl font-bold text-blue-600">
              {orders.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="font-semibold text-slate-700">
  Pending Orders
</p>

<h2 className="mt-3 text-5xl font-bold text-yellow-500">
  {
    orders.filter(
      (order: any) => order.status === "Pending"
    ).length
  }
</h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="font-semibold text-slate-700">
              Completed Orders
            </p>

            <h2 className="mt-3 text-5xl font-bold text-green-600">
  {
    orders.filter(
      (order: any) => order.status === "Completed"
    ).length
  }
</h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="font-semibold text-slate-700">
              Total Clients
            </p>

            <h2 className="mt-3 text-5xl font-bold text-purple-600">
  {clients.length}
</h2>
          </div>

        </div>

        {/* Recent Clients */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-6 text-2xl font-bold text-black">
            Recent Clients
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b text-left">

                <th className="pb-4">Name</th>
                <th className="pb-4">Email</th>
                <th className="pb-4">Plan</th>
                <th className="pb-4">Status</th>

              </tr>

            </thead>

            <tbody>

  {filteredOrders.slice(0, 5).map((order: any) => (

    <tr key={order.id} className="border-b">

      <td className="py-4 font-semibold">
        {order.ownerName}
      </td>

      <td>
        {order.userEmail}
      </td>

      <td>
        {order.package}
      </td>

      <td>
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold
          ${
            order.status === "Completed"
              ? "bg-green-100 text-green-700"
              : order.status === "In Progress"
              ? "bg-blue-100 text-blue-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {order.status}
        </span>
      </td>

    </tr>

  ))}

</tbody>

          </table>

        </div>

      </main>

    </div>
  );
}