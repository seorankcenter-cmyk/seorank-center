"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../signup/lib/firebase";

export default function ClientsPage() {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadClients();
  }, []);

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
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black">
          Clients
        </h1>

        <p className="text-gray-500">
          Manage all registered clients
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">

        {loading ? (

          <div className="py-10 text-center">
            Loading...
          </div>

        ) : (

          <table className="w-full">

            <thead>

              <tr className="border-b text-left">

                <th className="pb-4">Name</th>
                <th className="pb-4">Email</th>
                <th className="pb-4">UID</th>

              </tr>

            </thead>

            <tbody>

              {clients.map((client: any) => (

                <tr
                  key={client.id}
                  className="border-b"
                >

                  <td className="py-4 font-semibold">
                    {client.name || "No Name"}
                  </td>

                  <td>
                    {client.email}
                  </td>

                  <td>
                    {client.uid}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>
  );
}