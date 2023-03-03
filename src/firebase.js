// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPKDkvjbMVJsx9Ij7PBomzM23kbctE0xQ",
  authDomain: "quan-ly-ban-hang-5058e.firebaseapp.com",
  projectId: "quan-ly-ban-hang-5058e",
  storageBucket: "quan-ly-ban-hang-5058e.appspot.com",
  messagingSenderId: "650251654518",
  appId: "1:650251654518:web:ac83e2ba76def764cdd657",
  measurementId: "G-5S07HTXNLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
