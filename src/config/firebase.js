// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo3rezLx0lkMmqI8kSfRUhse18uuimrMU",
  authDomain: "vite-contact-c.firebaseapp.com",
  projectId: "vite-contact-c",
  storageBucket: "vite-contact-c.appspot.com",
  messagingSenderId: "489299794734",
  appId: "1:489299794734:web:e09e3e3abed31e07bdf8bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

