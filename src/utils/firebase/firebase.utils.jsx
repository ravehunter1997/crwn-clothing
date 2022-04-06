// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4hg7799G1k1qvLYIhNwJ6--gg3PLzfBM",
  authDomain: "crwn-clothing-db-59d2f.firebaseapp.com",
  projectId: "crwn-clothing-db-59d2f",
  storageBucket: "crwn-clothing-db-59d2f.appspot.com",
  messagingSenderId: "175847524917",
  appId: "1:175847524917:web:f2e31d47022cf869fbbf7c",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
   
    try {
      await setDoc(userDocRef, {                                         
        displayName,
        email,
        createdAt,
      });
    } catch(error) {
      console.log("error creating the user ", error.message);
    }
  }
   return userDocRef;
  };
