// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHKUzYQMnTzd9XQDiCAbemw7j79f-1ZQw",
  authDomain: "dragon-news-eb610.firebaseapp.com",
  projectId: "dragon-news-eb610",
  storageBucket: "dragon-news-eb610.appspot.com",
  messagingSenderId: "848135028806",
  appId: "1:848135028806:web:b123187b5315f580398a47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;