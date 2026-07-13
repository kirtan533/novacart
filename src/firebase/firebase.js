// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtbjiL2XGTdpcbiDxxgHtYXM3Ku-g4o7g",
  authDomain: "novacart-c0d0a.firebaseapp.com",
  projectId: "novacart-c0d0a",
  storageBucket: "novacart-c0d0a.firebasestorage.app",
  messagingSenderId: "510314428113",
  appId: "1:510314428113:web:16a46a2058c044347b77f0",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
