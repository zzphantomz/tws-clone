// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7xgjhBrE2jsSYiKSpvI2kVqj7QEDm9S4",
  authDomain: "twitter-clone-b497c.firebaseapp.com",
  projectId: "twitter-clone-b497c",
  storageBucket: "twitter-clone-b497c.appspot.com",
  messagingSenderId: "752301484317",
  appId: "1:752301484317:web:702613f9a480ad77c619f4",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
