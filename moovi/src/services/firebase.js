// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from './firebaseConfig'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) // https://firebase.blog/posts/2021/08/deep-dive-into-the-new-firebase-js-sdk-design
//const analytics = getAnalytics(app);

export { auth }