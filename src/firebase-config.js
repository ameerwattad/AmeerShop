
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAejI__JtaOvp9zmY2wEmNoy2UcfKpjOGI",
  authDomain: "ameer-shop.firebaseapp.com",
  projectId: "ameer-shop",
  storageBucket: "ameer-shop.appspot.com",
  messagingSenderId: "621579903573",
  appId: "1:621579903573:web:959fa905656b553c69eadc",
  measurementId: "G-RMQZ3TYX87"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export let db = getFirestore(app);
export const GoogleProvider = new GoogleAuthProvider();