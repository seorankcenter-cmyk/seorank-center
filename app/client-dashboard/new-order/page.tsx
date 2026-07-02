"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../signup/lib/firebase";

export default function NewOrderPage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
  businessName: "",
  ownerName: "",
  website: "",
  gmb: "",
  email: "",
  phone: "",
  address: "",
  country: "",
  service: "",
  package: "",
  keywords: "",
  businessHours: "",
  socialLinks: "",
  description: "",
});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitOrder = async () => {
    if (!auth.currentUser) {
      alert("Please login first.");
      return;
    }

    if (
      !form.businessName ||
      !form.service ||
      !form.package
    ) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "orders"), {
        ...form,
        userId: auth.currentUser.uid,
        userEmail: auth.currentUser.email,
        status: "Awaiting Payment",
        createdAt: serverTimestamp(),
      });

      alert("✅ Order Submitted Successfully");

      setForm({
  businessName: "",
  ownerName: "",
  website: "",
  gmb: "",
  email: "",
  phone: "",
  address: "",
  country: "",
  service: "",
  package: "",
  keywords: "",
  businessHours: "",
  socialLinks: "",
  description: "",
});
    } catch (error) {
      console.error(error);
      alert("Failed to submit order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow">

        <h1 className="text-4xl font-bold">
          🚀 Create New Order
        </h1>

        <p className="mt-2 text-gray-500">
          Fill in your business information.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">

          <div>
            <label className="font-semibold">Business Name *</label>
            <input
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Owner Name</label>
            <input
              name="ownerName"
              value={form.ownerName}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Website</label>
            <input
              name="website"
              value={form.website}
              onChange={handleChange}
              placeholder="https://example.com"
              className="mt-2 w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Google Business Profile</label>
            <input
              name="gmb"
              value={form.gmb}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Business Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Service *</label>

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border p-3"
            >
                
              <option value="">Select Service</option>
              <option>Local SEO</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Package *</label>

            <select
              name="package"
              value={form.package}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border p-3"
            >
              <option value="">Select Package</option>
              <option>BC</option>
              <option>30 Hyper Local Citations</option>
              <option>50 Hyper Local Citations</option>
              <option>BC+50 Hyper Local Citations</option>
              <option>100 Hyper Local Citations</option>
              <option>BC+100 Hyper Local Citations</option>
              <option>190 Hyper Local Citations</option>
              <option>BC+190 Hyper Local Citations</option>
              <option>Citation Audit</option>
              <option>Local Social Mesh</option>
              <option>Social Profiles</option>
              <option>Service Area</option>
              <option>Citation Cleanup</option>
              <option>Project Edit</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Main Keywords</label>
            <textarea
            rows={2}
              name="keywords"
              value={form.keywords}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border p-3"
            />
          </div>
          <div>
            <label className="font-semibold">Business Hours</label>
            <textarea
            rows={2}
              name="businessHours"
              value={form.businessHours}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border p-3"
            />
          </div>

        </div>

        <div className="mt-6">
          <label className="font-semibold">Business Address</label>

          <textarea
            rows={3}
            name="address"
            value={form.address}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>
        <div className="mt-6">
          <label className="font-semibold">Social Links</label>

          <textarea
            rows={3}
            name="socialLinks"
            value={form.socialLinks}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>

        <div className="mt-6">
          <label className="font-semibold">Business Description</label>

          <textarea
            rows={6}
            name="description"
            value={form.description}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>

        <button
          onClick={submitOrder}
          disabled={loading}
          className="mt-8 w-full rounded-2xl bg-blue-600 py-4 text-xl font-bold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "🚀 Submit Order"}
        </button>

      </div>
    </div>
  );
}