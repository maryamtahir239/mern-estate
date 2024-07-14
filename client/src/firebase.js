// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7048b.firebaseapp.com",
  projectId: "mern-estate-7048b",
  storageBucket: "mern-estate-7048b.appspot.com",
  messagingSenderId: "791098371977",
  appId: "1:791098371977:web:316ed9700e859ae697bb58"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);