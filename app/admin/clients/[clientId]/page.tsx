"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../signup/lib/firebase";

export default function ClientDetails() {
  const params = useParams();

  const [client, setClient] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadClient();
  }, []);

  async function loadClient() {
    // Client Info
    const userQuery = query(
      collection(db, "users"),
      where("clientId", "==", params.clientId)
    );

    const userSnap = await getDocs(userQuery);

    if (!userSnap.empty) {
      const userData = userSnap.docs[0].data();

      setClient(userData);

      // Client Orders
      const orderQuery = query(
        collection(db, "orders"),
        where("userId", "==", userData.uid)
      );

      const orderSnap = await getDocs(orderQuery);

      const orderData = orderSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(orderData);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-8 text-4xl font-bold text-slate-900">
          Client Details
        </h1>

        {/* Client Card */}

        <div className="rounded-3xl bg-white p-8 shadow-xl">

          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <p className="text-gray-500">Client ID</p>
              <p className="text-2xl font-bold text-blue-700">
                {client?.clientId}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Owner Name</p>
              <p className="text-xl font-semibold">
                {client?.ownerName}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Email</p>
              <p>{client?.email}</p>
            </div>

            <div>
              <p className="text-gray-500">Phone</p>
              <p>{client?.phone}</p>
            </div>

          </div>

        </div>

        {/* Orders */}

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">

          <h2 className="mb-6 text-3xl font-bold">
            Client Orders
          </h2>

          {orders.length === 0 ? (

            <div className="py-10 text-center text-gray-500">
              No Orders Found
            </div>

          ) : (

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="pb-4 text-left">Business</th>
                  <th className="pb-4 text-left">Service</th>
                  <th className="pb-4 text-left">Package</th>
                  <th className="pb-4 text-left">Country</th>
                  <th className="pb-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {orders.map((order: any) => (

                  <tr
                    key={order.id}
                    className="border-b hover:bg-slate-50"
                  >

                    <td className="py-4">
                      {order.businessName}
                    </td>

                    <td>{order.service}</td>

                    <td>{order.package}</td>

                    <td>{order.country}</td>

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