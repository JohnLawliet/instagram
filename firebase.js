import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "instagram-b7fd7.firebaseapp.com",
  projectId: "instagram-b7fd7",
  storageBucket: "instagram-b7fd7.appspot.com",
  messagingSenderId: "811698282289",
  appId: "1:811698282289:web:6effb4dec59c02b403da10"
};

// in SSR, it is possible to initialize multiple instances of firebase
// hence ensure if app is already initialized or not
// If not initialized create one, else use existing one using getApp(0)
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }