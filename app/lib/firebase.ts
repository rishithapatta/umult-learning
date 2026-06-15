import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9Ex57u8U-hh2MZZr_ddKJ9pQf713ATj0",
  authDomain: "umult-learning.firebaseapp.com",
  projectId: "umult-learning",
  storageBucket: "umult-learning.firebasestorage.app",
  messagingSenderId: "553983604402",
  appId: "1:553983604402:web:0138b7bad8aa12ebed7bab",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);