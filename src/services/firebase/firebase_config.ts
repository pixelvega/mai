// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4blr_JZVv0OGsL624C9__VagryCIyYck",
  authDomain: "mai-roots.firebaseapp.com",
  projectId: "mai-roots",
  storageBucket: "mai-roots.appspot.com",
  messagingSenderId: "556290529540",
  appId: "1:556290529540:web:28eb0e856e2c355720d851",
  measurementId: "G-D8Y94462FS",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
