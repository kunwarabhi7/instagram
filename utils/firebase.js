import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAAdgYWHyG7ALdUCFe9S4M6_kF9TuXIEPM",
  authDomain: "instagram-a8d93.firebaseapp.com",
  projectId: "instagram-a8d93",
  storageBucket: "instagram-a8d93.appspot.com",
  messagingSenderId: "1056838760968",
  appId: "1:1056838760968:web:ea1d3cd564d28890572fbd"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)


 