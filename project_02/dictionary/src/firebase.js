// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH-TJ3186hllMoybBkSLWoPu0wNrr2aOo",
  authDomain: "sprta-react-basic.firebaseapp.com",
  projectId: "sprta-react-basic",
  storageBucket: "sprta-react-basic.appspot.com",
  messagingSenderId: "885697745851",
  appId: "1:885697745851:web:784fa917fcb9d53b196a9e",
  measurementId: "G-VCG7S4DX7G"
};

initializeApp(firebaseConfig);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();