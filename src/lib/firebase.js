// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyz3HgRQRi2Hvq1k4h3lPaHE7qLbtIBZc",
  authDomain: "react-chat-app-ef492.firebaseapp.com",
  projectId: "react-chat-app-ef492",
  storageBucket: "react-chat-app-ef492.appspot.com",
  messagingSenderId: "1009772158728",
  appId: "1:1009772158728:web:258876f8db5c3d4a7f96bd",
  measurementId: "G-LK81SQ2MH4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
