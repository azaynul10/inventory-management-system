import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "inventory-managment-31b37.firebaseapp.com",
  projectId: "inventory-managment-31b37",
  storageBucket: "inventory-managment-31b37.appspot.com",
  messagingSenderId: "957320165452",
  appId: "1:957320165452:web:bef5c0483eb6daf6979ce9",
  measurementId: "G-F7NL9CM4RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};
