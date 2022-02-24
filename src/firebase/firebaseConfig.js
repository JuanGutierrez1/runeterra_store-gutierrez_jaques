// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtaIz8jAtt2bOP5o6Tuo-KKgXRibf850c",
  authDomain: "runeterra-store.firebaseapp.com",
  projectId: "runeterra-store",
  storageBucket: "runeterra-store.appspot.com",
  messagingSenderId: "644309924208",
  appId: "1:644309924208:web:d13af1d205a25bad3077b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);