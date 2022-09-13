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
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export const increment = firebase.firestore.FieldValue.increment;
