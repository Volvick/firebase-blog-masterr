import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEEUCpV4XcGHYlE-4GcMGiqjKRnsR0YUg",
  authDomain: "volvick-a91e5.firebaseapp.com",
  projectId: "volvick-a91e5",
  storageBucket: "volvick-a91e5.appspot.com",
  messagingSenderId: "207083241500",
  appId: "1:207083241500:web:cdcd1f37d98edcf1981fd9",
  measurementId: "G-CDCN9CWED4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
