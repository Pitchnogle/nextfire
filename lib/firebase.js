import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC29Qj8reY8TCmLj3ZpIrsF2n7Qn6j17ug",
  authDomain: "nextfire-e6289.firebaseapp.com",
  projectId: "nextfire-e6289",
  storageBucket: "nextfire-e6289.appspot.com",
  messagingSenderId: "553942062532",
  appId: "1:553942062532:web:2a7e3369afabfeb2cf8091",
  measurementId: "G-NXDD1PEF0J",
};

// (only initializes app if the length is 0!)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
