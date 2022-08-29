import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHC1QsFiaYJJRWCeVaNE1hSxTIhyIMv8c",
  authDomain: "facebook-clone-aa886.firebaseapp.com",
  databaseURL: "https://facebook-clone-aa886-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-aa886",
  storageBucket: "facebook-clone-aa886.appspot.com",
  messagingSenderId: "515790917175",
  appId: "1:515790917175:web:a54cdac987d04972daf9b2",
  measurementId: "G-4BCB5EN0TH"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore;
const auth = firebase.auth;
const provider = new firebase.auth.GoogleProvider();

export { auth, provider };
export default db;