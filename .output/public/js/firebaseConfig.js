import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAyzOxR31P2gojBNsILGoXZp6yS9f9ikLM",
  authDomain: "aruba-auth-d03e7.firebaseapp.com",
  projectId: "aruba-auth-d03e7",
  storageBucket: "aruba-auth-d03e7.appspot.com",
  messagingSenderId: "738497032431",
  appId: "1:738497032431:web:0218bbc291875577bd2b1a",
  measurementId: "G-6WMR4H68LH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
