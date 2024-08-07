// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv-ir_iKIFQyf48iSFwFH6Wjldcdx_s8s",
  authDomain: "toshoplist-b0df5.firebaseapp.com",
  projectId: "toshoplist-b0df5",
  storageBucket: "toshoplist-b0df5.appspot.com",
  messagingSenderId: "569926440997",
  appId: "1:569926440997:web:8979ab0614b18d6889c7cc",
  measurementId: "G-EQRFSNKGPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
const db = getFirestore(app);

export { db };