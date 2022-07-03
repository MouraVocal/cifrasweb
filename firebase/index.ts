// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}

// Initialize Firebase
export const app =
  getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig)

console.log(getApps())
