import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCo22kfmpNd0x527lQ8M_Y-MEHeepuWJv8",
  authDomain: "e-commerce-alvaro-vargas-44435.firebaseapp.com",
  projectId: "e-commerce-alvaro-vargas-44435",
  storageBucket: "e-commerce-alvaro-vargas-44435.appspot.com",
  messagingSenderId: "208176734693",
  appId: "1:208176734693:web:eac8ed5075c8bd71678f0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);