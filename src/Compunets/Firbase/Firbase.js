// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU7PvXI6vDCjot6Y7Lo4Anb0-tpbUxRRY",
  authDomain: "react-auth-5360d.firebaseapp.com",
  projectId: "react-auth-5360d",
  storageBucket: "react-auth-5360d.appspot.com",
  messagingSenderId: "252249680522",
  appId: "1:252249680522:web:65b7096148519fbc4d5b73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
