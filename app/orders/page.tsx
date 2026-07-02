"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../signup/lib/firebase";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    try {
      const snapshot = await getDocs(collection(db, "orders"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8 text-gray-900">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              Orders
            </h1>

            <p className="text-gray-500">
              Manage all client orders
            </p>
          </div>

          <Link href="/dashboard">
            <button className="rounded-xl bg-gray-800 px-6 py-3 font-semibold text-white hover:bg-black">
              ← Dashboard
            </button>
          </Link>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow">

          {loading ? (

            <div className="py-20 text-center text-xl">
              Loading Orders...
            </div>

          ) : (

            <table className="w-full">

              <thead>

                <tr className="border-b text-left">

                  <th className="pb-4">Business</th>
                  <th className="pb-4">Owner</th>
                  <th className="pb-4">Service</th>
                  <th className="pb-4">Package</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Action</th>

                </tr>

              </thead>

              <tbody>

                {orders.map((order: any) => (

                  <tr
                    key={order.id}
                    className="border-b"
                  >

                    <td className="py-5 font-semibold">
                      {order.businessName}
                    </td>

                    <td>
                      {order.ownerName}
                    </td>

                    <td>
                      {order.service}
                    </td>

                    <td>
                      {order.package}
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

                      <Link href={`/orders/${order.id}`}>

                        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">

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