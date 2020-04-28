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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account " });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
