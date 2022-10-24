// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi23ZGU_8xbYwKIU-7aTozshHRH6VJyMk",
  authDomain: "dragon-news-three.firebaseapp.com",
  projectId: "dragon-news-three",
  storageBucket: "dragon-news-three.appspot.com",
  messagingSenderId: "867466113673",
  appId: "1:867466113673:web:f4a02ded98dd68b8d8cc58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;