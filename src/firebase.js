// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9Dm5QSbSlVKH_BIpF088us8SB9d7bKOQ",
  authDomain: "esummit-mails.firebaseapp.com",
  projectId: "esummit-mails",
  storageBucket: "esummit-mails.firebasestorage.app",
  messagingSenderId: "368396104793",
  appId: "1:368396104793:web:d1efa6fff95e437dbbad48",
  measurementId: "G-F7QQGNYXGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };