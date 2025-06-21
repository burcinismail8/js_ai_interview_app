import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "prepwise---ai-interview.firebaseapp.com",
  projectId: "prepwise---ai-interview",
  storageBucket: "prepwise---ai-interview.firebasestorage.app",
  messagingSenderId: "663787644821",
  appId: "1:663787644821:web:4679caa679a5f66d54389c",
  measurementId: "G-B1HVCFN2QR",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
