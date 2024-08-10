// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRSJ6EXt8WlHbk8LlsL2ZTx7bUWw2WSHo",
  authDomain: "whiteboard-271cf.firebaseapp.com",
  projectId: "whiteboard-271cf",
  storageBucket: "whiteboard-271cf.appspot.com",
  messagingSenderId: "319860109198",
  appId: "1:319860109198:web:8ed83fefab11a069f13edf",
  measurementId: "G-LG0XDYFBZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
