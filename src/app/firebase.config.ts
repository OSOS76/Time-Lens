// Import the functions you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAem7NSR2pQIhA1nGcvppfhY_denBRnptc",
  authDomain: "timelens-318df.firebaseapp.com",
  projectId: "timelens-318df",
  storageBucket: "timelens-318df.firebasestorage.app",
  messagingSenderId: "38360825666",
  appId: "1:38360825666:web:eb27fa0bab31b3212c92db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Authentication
export const auth = getAuth(app);

// Export Firestore
export const db = getFirestore(app);
