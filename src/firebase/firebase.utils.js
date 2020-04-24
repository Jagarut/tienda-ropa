import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAy0LE6R39X691zajzU_ODtckn2EfdzTxA",
  authDomain: "crown-d.firebaseapp.com",
  databaseURL: "https://crown-d.firebaseio.com",
  projectId: "crown-d",
  storageBucket: "crown-d.appspot.com",
  messagingSenderId: "135818159669",
  appId: "1:135818159669:web:9bb9fd6c2ac13517b9737c",
  measurementId: "G-QXBYES2YXH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account " });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
