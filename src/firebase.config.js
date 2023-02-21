import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1j8cEqJUtFSoWNI8VUm0jt4N2wZwZTX0",
  authDomain: "maltimart-shop-f91a2.firebaseapp.com",
  projectId: "maltimart-shop-f91a2",
  storageBucket: "maltimart-shop-f91a2.appspot.com",
  messagingSenderId: "274768794993",
  appId: "1:274768794993:web:dd72230e32233d12a352d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
