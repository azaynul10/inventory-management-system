// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfNlUvkDkL7qK5RzdzH2c-LA9sYOnBFD0",
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