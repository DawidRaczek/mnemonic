// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCqhzvjW23Aj6mcF3Gwkovmgctbw6Fy3c",
    authDomain: "mnemonic-cards.firebaseapp.com",
    projectId: "mnemonic-cards",
    storageBucket: "mnemonic-cards.appspot.com",
    messagingSenderId: "210916818809",
    appId: "1:210916818809:web:84bf2b238a23fa77d2f9a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);