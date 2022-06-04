// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-MDLK4jLgzB_4Do5wVs7QiMdi4isDjP4",
  authDomain: "tudreamteam-bfe79.firebaseapp.com",
  projectId: "tudreamteam-bfe79",
  storageBucket: "tudreamteam-bfe79.appspot.com",
  messagingSenderId: "378892363128",
  appId: "1:378892363128:web:6d89ec570f27e27550148d",
  measurementId: "G-EK44LY5M46"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

export default db;