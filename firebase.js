
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

// Config Firebase của ông
const firebaseConfig = {
  apiKey: "AIzaSyAf2MFl4wAJRKvLeeNavMvKFUHNlUPSmX4",
  authDomain: "quan-ly-diem-265b0.firebaseapp.com",
  projectId: "quan-ly-diem-265b0",
  storageBucket: "quan-ly-diem-265b0.appspot.com",
  messagingSenderId: "494728860444",
  appId: "1:494728860444:web:5ac8b5ca1dc3c2dba4068d",
  measurementId: "G-J5EWNPDGPK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

