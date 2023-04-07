import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2T90n-bP71VnNR4GZl5rBn8_mOzp-3Y8",
  authDomain: "mydiary-eabd5.firebaseapp.com",
  projectId: "mydiary-eabd5",
  storageBucket: "mydiary-eabd5.appspot.com",
  messagingSenderId: "712165486292",
  appId: "1:712165486292:web:2bb824886d61e20da2d541",
  measurementId: "G-XTX31PS61D",
};

// VITE + React + TS에서는 proces 대신 import.meta.env를 사용해 .env 환경 변수를 가져옴.

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
