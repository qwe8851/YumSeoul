import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAR60lcymwRaN1NY8aXTXo4t_GLewh2-xs",
  authDomain: "yum-seoul.firebaseapp.com",
  projectId: "yum-seoul",
  storageBucket: "yum-seoul.appspot.com",
  messagingSenderId: "282730358570",
  appId: "1:282730358570:web:bba7bd0ab5d65eabae2053",
  measurementId: "G-10P5EJEKQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);