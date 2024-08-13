import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDR1B0Ggqu3jHvWbF6_9th07qpVPNMWuok",
  authDomain: "chat-8bd13.firebaseapp.com",
  projectId: "chat-8bd13",
  storageBucket: "chat-8bd13.appspot.com",
  messagingSenderId: "709680226850",
  appId: "1:709680226850:web:5ca3585d4ced60e0cb607b",
  measurementId: "G-NLBVRF4MP6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
