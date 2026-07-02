"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../signup/lib/firebase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      router.push("/dashboard");
    } catch (err) {
      alert("Invalid Email or Password");
      console.log(err);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">

      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

        <h1 className="mb-2 text-center text-4xl font-bold">
  Order Dashboard
</h1>

<p className="mb-8 text-center text-gray-500">
  Login to access your dashboard
</p>

        <p className="mb-8 text-center text-gray-500">
          Login with your Admin Account
        </p>

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded-xl border p-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-6 w-full rounded-xl border p-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700"
        >
          Login
        </button>

      </div>

    </div>
  );
}