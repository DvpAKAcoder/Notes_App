// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcgvCoNQtBkjUUqGBT8raYcG1jxCRpQQM",
  authDomain: "react-notes-d2985.firebaseapp.com",
  projectId: "react-notes-d2985",
  storageBucket: "react-notes-d2985.appspot.com",
  messagingSenderId: "1093638757751",
  appId: "1:1093638757751:web:3d07e1da9f4937c9c41572"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");