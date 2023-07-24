// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDET--gGe1sSpUQGFbKZd-W26O-eJONstQ",
  authDomain: "vroom-app-68844.firebaseapp.com",
  projectId: "vroom-app-68844",
  storageBucket: "vroom-app-68844.appspot.com",
  messagingSenderId: "1046383659750",
  appId: "1:1046383659750:web:2547f2f35425cc05b70927",
  measurementId: "G-T00TMFZHKV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();