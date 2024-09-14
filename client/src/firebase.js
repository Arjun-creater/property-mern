// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-130d2.firebaseapp.com",
  projectId: "mern-estate-130d2",
  storageBucket: "mern-estate-130d2.appspot.com",
  messagingSenderId: "550805156719",
  appId: "1:550805156719:web:755e0e54b1307167d0ae9a"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);