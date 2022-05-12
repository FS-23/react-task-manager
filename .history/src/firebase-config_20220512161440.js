import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD5rTrE9gHlZjhMAg4WTwj3vbyKvT4yrpo",
  authDomain: "fs-23-taskmanager.firebaseapp.com",
  projectId: "fs-23-taskmanager",
  storageBucket: "fs-23-taskmanager.appspot.com",
  messagingSenderId: "409848607226",
  appId: "1:409848607226:web:1000e7ce8565398a1c7443",
  measurementId: "G-2303C3SQ8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
