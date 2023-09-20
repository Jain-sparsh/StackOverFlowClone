// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQGxHsUd_y9PVV2YpPS23cMWs4rgnUNTI",
  authDomain: "stackoverflowclone-52d79.firebaseapp.com",
  projectId: "stackoverflowclone-52d79",
  storageBucket: "stackoverflowclone-52d79.appspot.com",
  messagingSenderId: "1087104575211",
  appId: "1:1087104575211:web:c3c198ae5b075a0e3e80ae",
  measurementId: "G-3YKSJ4E0Q8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const provider=new GoogleAuthProvider()
