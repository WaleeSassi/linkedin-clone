// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC_0VI6KucVZCu0PBOjB3Bh8B3fUG83Uco",
  authDomain: "linkedin-clone-3c1f1.firebaseapp.com",
  projectId: "linkedin-clone-3c1f1",
  storageBucket: "linkedin-clone-3c1f1.appspot.com",
  messagingSenderId: "784271250933",
  appId: "1:784271250933:web:a91abdca36c62d4028fcbc",
  measurementId: "G-1RVDC9Z9HB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
