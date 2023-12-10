// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIvip6nbcAF23Q3MXY54VYa6Mk5S8hNuc",
  authDomain: "netflix-gpt-514a4.firebaseapp.com",
  projectId: "netflix-gpt-514a4",
  storageBucket: "netflix-gpt-514a4.appspot.com",
  messagingSenderId: "707726180639",
  appId: "1:707726180639:web:b2ad2449993311713c302a",
  measurementId: "G-L424BPTJEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();