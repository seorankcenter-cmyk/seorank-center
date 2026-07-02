import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjbzdBbRByNV1jksiQ8ZsbqJKuPhRmrjU",
  authDomain: "seorank-center-39093.firebaseapp.com",
  projectId: "seorank-center-39093",
  storageBucket: "seorank-center-39093.firebasestorage.app",
  messagingSenderId: "839719878783",
  appId: "1:839719878783:web:8a70ded2a0992089a3bf4a",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);