import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs,getDoc, updateDoc, doc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9Dm5QSbSlVKH_BIpF088us8SB9d7bKOQ",
  authDomain: "esummit-mails.firebaseapp.com",
  projectId: "esummit-mails",
  storageBucket: "esummit-mails.appspot.com",
  messagingSenderId: "368396104793",
  appId: "1:368396104793:web:d1efa6fff95e437dbbad48",
  measurementId: "G-F7QQGNYXGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs,getDoc, updateDoc, doc };
