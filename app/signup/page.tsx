"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth, googleProvider } from "./lib/firebase";
import { db } from "./lib/firebase";
import {
  doc,
  setDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";

export default function SignupPage() {

  const router = useRouter();
 const OWNER_EMAIL = "seorankcenter@gmail.com";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  async function redirectUser(userEmail: string) {
  if (userEmail === OWNER_EMAIL) {
    router.push("/dashboard");
    return;
  }

  const adminRef = doc(db, "admins", userEmail);
  const adminSnap = await getDoc(adminRef);

  if (adminSnap.exists()) {
    router.push("/dashboard");
  } else {
    router.push("/client-dashboard");
  }
}

async function handleLogin() {
  setLoading(true);

  try {
    const userCredential =
  await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

await redirectUser(userCredential.user.email || "");
  } catch (error: any) {
    alert(error.message);
  } finally {
    setLoading(false);
  }
}

const handleSignup = async () => {
  setLoading(true);

  try {
    const userCredential =
  await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

const clientId =
  "SRC-" + Math.floor(100000 + Math.random() * 900000);

await setDoc(doc(db, "users", userCredential.user.uid), {
  uid: userCredential.user.uid,
  clientId,
  email,
  ownerName: "",
  phone: "",
  country: "",
  businessName: "",
  website: "",
  photoURL: "",
  createdAt: serverTimestamp(),
});

await redirectUser(userCredential.user.email || "");
  } catch (error: any) {
    alert(error.message);
  } finally {
    setLoading(false);
  }
};
async function handleForgotPassword() {
  if (!email) {
    alert("Enter your email first.");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent.");
  } catch (error: any) {
    alert(error.message);
  }
}

async function handleGoogle() {
  setLoading(true);

  try {
    const result = await signInWithPopup(auth, googleProvider);

    const clientId =
  "SRC-" + Math.floor(100000 + Math.random() * 900000);

await setDoc(doc(db, "users", result.user.uid), {
  uid: result.user.uid,
  clientId,
  email: result.user.email,
  ownerName: "",
  phone: "",
  country: "",
  businessName: "",
  website: "",
  photoURL: "",
  createdAt: serverTimestamp(),
});

    await redirectUser(result.user.email || "");
  } catch (error: any) {
    alert(error.message);
  } finally {
    setLoading(false);
  }
}    

  return (
    <div className="flex min-h-screen items-center justify-center bg-black/60 p-4">

      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <button
  onClick={() => router.push("/")}
  className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-gray-500 shadow-xl transition hover:rotate-90 hover:text-red-500"
>
  ✕
</button>

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/seorank-logo.png"
            alt="SEORank Center"
            width={170}
            height={70}
            priority
            className="h-16 w-auto"
          />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-center text-2xl font-bold text-gray-900">
          {isLogin ? "Welcome to SEOrank Center" : "Create Account"}
        </h1>

        <p className="mt-3 text-center text-lg text-gray-500">
  {isLogin
    ? "Access your premium local SEO workspace"
    : "Create your premium SEO Dashboard account"}
</p>

       {/* Tabs */}
<div className="mt-8 rounded-2xl border border-gray-200 bg-gray-100 p-1">
  <div className="grid grid-cols-2 gap-1">

   <button
  onClick={() => setIsLogin(true)}
  className={`w-full rounded-xl py-3 text-base font-semibold transition-all duration-300 ${
    isLogin
      ? "bg-blue-600 text-white shadow-lg"
      : "bg-white text-gray-800"
  }`}
>
  Sign In
</button>

    <button
  onClick={() => setIsLogin(false)}
  className={`w-full rounded-xl py-3 text-base font-semibold transition-all duration-300 ${
    !isLogin
      ? "bg-blue-600 text-white shadow-lg"
      : "bg-white text-gray-800"
  }`}
>
  Sign Up
</button>

  </div>
</div>

        {/* Email */}
        <div className="mt-6">
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Email Address
          </label>

          <input
  type="email"
  placeholder="name@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
/>
        </div>

        {/* Password */}
        <div className="mt-5">
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <div className="mt-2 text-right">
            <button
  onClick={handleForgotPassword}
  className="text-sm text-blue-600 hover:underline"
>
  Forgot Password?
</button>
          </div>
        </div>

        {/* Login Button */}
        <button
  onClick={isLogin ? handleLogin : handleSignup}
  disabled={loading}
  className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
>
    
  {loading
  ? "Loading..."
  : isLogin
  ? "Sign In →"
  : "Sign Up →"}
  
</button>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>

          <span className="mx-4 text-sm text-gray-400">
            OR
          </span>

          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        {/* Google */}
        <button
  onClick={handleGoogle}
  className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 py-3 font-extrabold transition hover:bg-gray-50"
>

          <Image
            src="/google.jpg"
            alt="Google"
            width={20}
            height={20}
            className="h-8 w-10 object-contain"
          />

            {isLogin ? "Sign in with Google" : "Sign up with Google"}

        </button>

        {/* Bottom */}
        <p className="mt-8 text-center text-gray-600">
          {isLogin
  ? "Don't have an account?"
  : "Already have an account?"}
          <button
  onClick={() => setIsLogin(!isLogin)}
  className="ml-2 font-semibold text-blue-600 hover:underline"
>
  {isLogin ? "Sign Up" : "Sign In"}
</button>
        </p>

        {/* Terms */}
        <p className="mt-6 text-center text-xs leading-6 text-gray-400">
          By continuing, you agree to our{" "}
          <span className="cursor-pointer text-blue-600 hover:underline">
            Terms of Service
          </span>{" "}
          &{" "}
          <span className="cursor-pointer text-blue-600 hover:underline">
            Privacy Policy
          </span>.
        </p>

      </div>

    </div>
  );
}