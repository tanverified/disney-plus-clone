import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDAWQzyaPqOPmsqDllgjU0NLggfOdMy6Vo",
  authDomain: "disney-clone-b5afe.firebaseapp.com",
  projectId: "disney-clone-b5afe",
  storageBucket: "disney-clone-b5afe.appspot.com",
  messagingSenderId: "107780296942",
  appId: "1:107780296942:web:c76370ba20e4f56a08a3ff",
  measurementId: "G-LNSXTTHHYZ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
