import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD4shPWocJhOBPnfCUEhTloCrN-MC-Acyg",
  authDomain: "email-a6d85.firebaseapp.com",
  projectId: "email-a6d85",
  storageBucket: "email-a6d85.appspot.com",
  messagingSenderId: "998493887019",
  appId: "1:998493887019:web:48260d13affd4c44bea86e",
  measurementId: "G-WDTFM6LSDW"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }