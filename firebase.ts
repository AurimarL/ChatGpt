import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC09ezKDeuLYxRLAedV81UgUzbCHXFGjyE",
  authDomain: "aurora-ai-20880.firebaseapp.com",
  projectId: "aurora-ai-20880",
  storageBucket: "aurora-ai-20880.appspot.com",
  messagingSenderId: "354773166193",
  appId: "1:354773166193:web:45e18a14fe1143775993d0",
  measurementId: "G-2VHPLKHGSJ",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
