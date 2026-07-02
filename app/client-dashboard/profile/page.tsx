"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/app/signup/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";

export default function ProfilePage() {

  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async(user)=>{

      if(!user) return;

      const snap = await getDoc(doc(db,"users",user.uid));

      if(snap.exists()){
        setProfile(snap.data());
      }

    });

    return ()=>unsubscribe();

  },[]);

  return (

<div className="min-h-screen bg-gray-100 p-10">

<div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl">

<h1 className="mb-8 text-4xl font-bold">
My Profile
</h1>

<div className="space-y-5">

<p><b>Name:</b> {profile?.ownerName || "-"}</p>

<p><b>Email:</b> {profile?.email}</p>

<p><b>Phone:</b> {profile?.phone || "-"}</p>
<p>
  <b>Client ID:</b> {profile?.clientId}
</p>

</div>

<Link href="/client-dashboard/profile/edit">

<button className="mt-8 rounded-xl bg-blue-600 px-8 py-3 text-white">

Edit Profile

</button>

</Link>

</div>

</div>

  );

}