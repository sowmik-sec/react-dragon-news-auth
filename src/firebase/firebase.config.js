// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQfsbqGl0jxd-OpxXuk055XUhiKftHWFw",
  authDomain: "react-dragon-news-auth-35804.firebaseapp.com",
  projectId: "react-dragon-news-auth-35804",
  storageBucket: "react-dragon-news-auth-35804.appspot.com",
  messagingSenderId: "149596600857",
  appId: "1:149596600857:web:102860f76dd08a1de20888",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
