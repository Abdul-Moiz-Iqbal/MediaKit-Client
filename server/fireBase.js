// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
const {initializeApp} = require("firebase")
// import { getAnalytics } from "firebase/analytics";
const {getAnalytics} = require("firebase")
const {getStorage} = require("firebase/storage")

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbkWhBF4n0J5RNvzT8h6dQB2rOKCzRQQc",
  authDomain: "mediakit-e8a0a.firebaseapp.com",
  projectId: "mediakit-e8a0a",
  storageBucket: "mediakit-e8a0a.appspot.com",
  messagingSenderId: "501775709036",
  appId: "1:501775709036:web:6e89c93b4a8b38c2e4b949",
  measurementId: "G-KNL432YKCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage( app)