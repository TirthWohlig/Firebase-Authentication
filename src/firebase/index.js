import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBKig4PzDD-74K23DqTEpaJDbY-BTPLD-8",
  authDomain: "invoicez-co-in.firebaseapp.com",
  projectId: "invoicez-co-in",
  storageBucket: "invoicez-co-in.appspot.com",
  messagingSenderId: "304557408513",
  appId: "1:304557408513:web:fc1b7aa5c5490edd60db00",
  measurementId: "G-Y5BCSX87XW"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }