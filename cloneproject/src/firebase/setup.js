// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBzaPLCMjUbkaYX_W8pPVGPGvg6gXv_8QI",
  authDomain: "myntra-clone-63fde.firebaseapp.com",
  projectId: "myntra-clone-63fde",
  storageBucket: "myntra-clone-63fde.firebasestorage.app",
  messagingSenderId: "863655644343",
  appId: "1:863655644343:web:1641fb21aa8eeedcebd132",
  measurementId: "G-9DEB0ZGLCB"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
