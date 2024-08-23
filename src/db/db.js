import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaUzFDAMF02f6Qorm2t-vDQWoMbpEHudg",
    authDomain: "cideco-handball.firebaseapp.com",
    projectId: "cideco-handball",
    storageBucket: "cideco-handball.appspot.com",
    messagingSenderId: "926522089939",
    appId: "1:926522089939:web:4493dc84390db9a9128f26"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db