// src/firebase/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHce0hjSkYCsqGWlfXqEfLixvHehxbfxY",
  authDomain: "gymfitnessapp-3a335.firebaseapp.com",
  projectId: "gymfitnessapp-3a335",
  storageBucket: "gymfitnessapp-3a335.firebasestorage.app",
  messagingSenderId: "712706724965",
  appId: "1:712706724965:android:9213f71488f5308647e28c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);