// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPvrbVZeqRyMTSeVxxqN6l1GL7W0sCv9A",
  authDomain: "programming-kit-client.firebaseapp.com",
  projectId: "programming-kit-client",
  storageBucket: "programming-kit-client.appspot.com",
  messagingSenderId: "1023099350592",
  appId: "1:1023099350592:web:1aecbf6888a01a9e96f9a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;