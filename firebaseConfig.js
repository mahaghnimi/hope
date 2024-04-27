// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUI4EygNE3AR46Jk2j6oRd8qfg5OqkVx4",
  authDomain: "hope-4fcb7.firebaseapp.com",
  projectId: "hope-4fcb7",
  storageBucket: "hope-4fcb7.appspot.com",
  messagingSenderId: "273597098251",
  appId: "1:273597098251:web:20119d8b25ca3704609a0e"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const db =  getFirestore(FIREBASE_APP)