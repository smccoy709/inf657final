// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBy3_qFM4mmvW3DPjT5ZGqANYEY2Y_X41M",
    authDomain: "moviereviews-c4f04.firebaseapp.com",
    projectId: "moviereviews-c4f04",
    storageBucket: "moviereviews-c4f04.appspot.com",
    messagingSenderId: "1085508945215",
    appId: "1:1085508945215:web:96fd8496d00c4d1cd3ff8a",
    measurementId: "G-FZ57T6VJ7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export default app;