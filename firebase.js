import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyAI3b8E6VS2kjauWdskdeF6k4t_3iar_yw",
  authDomain: "road2hired.firebaseapp.com",
  projectId: "road2hired",
  storageBucket: "road2hired.firebasestorage.app",
  messagingSenderId: "1055126569307",
  appId: "1:1055126569307:web:db4d44c04c1ac325791a7e"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged }

