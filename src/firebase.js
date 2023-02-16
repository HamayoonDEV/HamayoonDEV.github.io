import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjqSfMXuBtivSu_LrENBKIln50p-MrNyU",
  authDomain: "cricket-d43c7.firebaseapp.com",
  projectId: "cricket-d43c7",
  storageBucket: "cricket-d43c7.appspot.com",
  messagingSenderId: "565404843655",
  appId: "1:565404843655:web:c8521ed407af2d4fd30222",
  measurementId: "G-HE9V6ER3ZV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
