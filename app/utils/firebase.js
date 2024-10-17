// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBQW9ZBNefqhDSl6fJox0AA2Cvcbq6H4U",
  authDomain: "cc-cia-b0118.firebaseapp.com",
  databaseURL: "https://cc-cia-b0118-default-rtdb.firebaseio.com",
  projectId: "cc-cia-b0118",
  storageBucket: "cc-cia-b0118.appspot.com",
  messagingSenderId: "788060122896",
  appId: "1:788060122896:web:59b0d4109ff7d9ab44bf95",
  measurementId: "G-6ZC9LCD6WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
