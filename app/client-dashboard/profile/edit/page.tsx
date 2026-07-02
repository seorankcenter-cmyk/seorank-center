"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/app/signup/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function EditProfile() {

  const router = useRouter();

  const [uid, setUid] = useState("");

  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async(user)=>{

      if(!user) return;

      setUid(user.uid);

      const snap = await getDoc(doc(db,"users",user.uid));

      if(snap.exists()){

        const data = snap.data();

        setOwnerName(data.ownerName || "");
        setPhone(data.phone || "");
        setCountry(data.country || "");
        setBusinessName(data.businessName || "");
        setWebsite(data.website || "");

      }

    });

    return ()=>unsubscribe();

  },[]);

  async function saveProfile(){

    await updateDoc(doc(db,"users",uid),{

      ownerName,
      phone,
      country,
      businessName,
      website,

    });

    alert("Profile Updated Successfully");

    router.push("/client-dashboard/profile");

  }

  return(

<div className="min-h-screen bg-gray-100 p-10">

<div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl">

<h1 className="mb-8 text-3xl font-bold">

Edit Profile

</h1>

<div className="space-y-5">

<input
className="w-full rounded-xl border p-3"
placeholder="Owner Name"
value={ownerName}
onChange={(e)=>setOwnerName(e.target.value)}
/>

<input
className="w-full rounded-xl border p-3"
placeholder="Phone"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>
<button
onClick={saveProfile}
className="w-full rounded-xl bg-blue-600 py-3 text-white font-bold hover:bg-blue-700"
>

Save Changes

</button>

</div>

</div>

</div>

  );

}