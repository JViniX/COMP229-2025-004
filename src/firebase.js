// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: "comp229-004.firebaseapp.com",
  projectId: "comp229-004",
  storageBucket: "comp229-004.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_APP_SENDERID,
  appId: import.meta.env.VITE_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;