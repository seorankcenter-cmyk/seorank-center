"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../signup/lib/firebase";

export default function ClientDashboard() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  async function logout() {
  await signOut(auth);
  window.location.href = "/login";
}
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setLoading(false);
        return;
      }
      async function logout() {
  await signOut(auth);
  window.location.href = "/login";
}
      
      setCurrentUser({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
});
const userDoc = await getDoc(doc(db, "users", user.uid));

if (userDoc.exists()) {
  setProfile(userDoc.data());
}
      const q = query(
        collection(db, "orders"),
        where("userId", "==", user.uid)
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const totalOrders = orders.length;

  const activeOrders = orders.filter(
    (o) =>
      o.status === "Pending" ||
      o.status === "In Progress"
  ).length;

  const completedOrders = orders.filter(
    (o) => o.status === "Completed"
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">

      {/* Navbar */}

      <header className="relative overflow-visible bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 shadow-xl">

  <div className="relative mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

    <div className="flex items-center gap-4">

      <Image
        src="/seorank-logo.jpg"
        alt="Logo"
        width={55}
        height={55}
        className="rounded-xl bg-white p-2"
      />

      <div>

        <h1 className="text-3xl font-extrabold text-white">
          SEOrank Center
        </h1>

        <p className="text-sm text-blue-200">
          Client Dashboard
        </p>

      </div>

    </div>

    <div className="flex items-center gap-5">

      <Link href="/client-dashboard/new-order">

        <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105">

          + New Order

        </button>

      </Link>

      <div className="relative shrink-0">

  <button
    onClick={() => setShowProfileMenu(!showProfileMenu)}
    className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur transition hover:bg-white/20"
  >
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-bold text-blue-700">
      {(
        profile?.ownerName ||
        profile?.name ||
        currentUser?.displayName ||
        currentUser?.email ||
        "C"
      )
        .charAt(0)
        .toUpperCase()}
    </div>

    <div className="text-left">

      <p className="font-semibold text-white">
        {profile?.ownerName ||
          profile?.name ||
          currentUser?.displayName ||
          "Client"}
      </p>

      <p className="text-xs text-blue-200">
        {profile?.email || currentUser?.email}
      </p>

    </div>

    <span className="text-white">▼</span>

  </button>

 {showProfileMenu && (
  <div
    className="absolute right-0 top-full z-50 mt-3 w-56 rounded-2xl bg-white shadow-2xl overflow-hidden"
  >
      <Link
  href="/client-dashboard/profile"
  className="block px-5 py-3 text-gray-700 hover:bg-gray-100"
>
  👤 My Profile
</Link>

<hr className="border-gray-200" />

<button
  onClick={logout}
  className="w-full px-5 py-3 text-left text-red-600 hover:bg-red-50"
>
  🚪 Logout
</button>

    </div>

  )}

</div>


    </div>

  </div>

</header>

      <div className="mx-auto max-w-7xl p-10">

        <h2 className="text-4xl font-bold">
          My Orders
        </h2>

        <p className="mt-2 text-gray-500">
          Track your campaign progress.
        </p>

        {/* Stats */}

        <div className="mt-10 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-2xl transition duration-300 hover:-translate-y-2">

            <h3 className="text-gray-500 text-lg font-semibold">
  Total Orders
</h3>

<p className="mt-4 text-6xl font-extrabold">
  {totalOrders}
</p>

<p className="mt-2 text-gray-500">
  All Orders
</p>

          </div>

          <div className="rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-400 p-8 text-white shadow-2xl transition duration-300 hover:-translate-y-2">

            <h3 className="text-yellow-100 text-lg font-semibold">
  Active Orders
</h3>

<p className="mt-4 text-6xl font-bold">
  {activeOrders}
</p>

<p className="mt-2 text-yellow-100">
  Running Projects
</p>

          </div>
          <div className="rounded-3xl bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-white shadow-2xl transition duration-300 hover:-translate-y-2">

            <h3 className="text-green-100 text-lg font-semibold">
  Completed
</h3>

<p className="mt-4 text-6xl font-bold">
  {completedOrders}
</p>

<p className="mt-2 text-green-100">
  Successfully Delivered
</p>

          </div>

        </div>

        {/* Orders */}

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">

          <h2 className="mb-6 text-2xl font-bold">
            Orders
          </h2>

          {loading ? (

            <div className="py-20 text-center">
              Loading...
            </div>

          ) : orders.length === 0 ? (

            <div className="py-20 text-center text-gray-500">

              <p>No Orders Yet</p>

              <Link href="/client-dashboard/new-order">

                <button className="mt-6 rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">

                  Create First Order

                </button>

              </Link>

            </div>

          ) : (

            <table className="w-full overflow-hidden rounded-xl">

              <thead>

  <tr className="bg-slate-100 text-left text-slate-700">

    <th className="pb-4">Business</th>
    <th className="pb-4">Service</th>
    <th className="pb-4">Package</th>
    <th className="pb-4">Country</th>
    <th className="pb-4">Status</th>
    <th className="pb-4">Action</th>

  </tr>

</thead>

              <tbody>

                {orders.map((order: any) => (

                  <tr
  key={order.id}
  className="border-b hover:bg-blue-50 transition"
>

                    <td className="py-5 font-semibold">
                      {order.businessName}
                    </td>

                    <td>
                      {order.service}
                    </td>

                    <td>
                      {order.package}
                    </td>

                    <td>
                      {order.country}
                    </td>

                    <td>

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold
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
                    <td>
  <Link href={`/client-dashboard/dashboard/${order.id}`}>
  <button className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-white shadow hover:scale-105 transition">
    Details
  </button>
</Link>
</td>

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