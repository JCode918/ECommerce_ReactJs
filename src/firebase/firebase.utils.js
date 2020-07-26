import firebase from "firebase/app";

import "firebase/firestore"; // This imports the firebase database
import "firebase/auth"; // This imports the functionality for authentication
//import { updateLanguageServiceSourceFile } from "typescript";

const config = {
  apiKey: "AIzaSyCNqn5u-azpENEEB9kvu4dg7IZBRCPFOJc",
  authDomain: "ecomm-db-51860.firebaseapp.com",
  databaseURL: "https://ecomm-db-51860.firebaseio.com",
  projectId: "ecomm-db-51860",
  storageBucket: "ecomm-db-51860.appspot.com",
  messagingSenderId: "36721856078",
  appId: "1:36721856078:web:dc323d2c3020e48eeabd1f",
  measurementId: "G-S44Y1S5YXS",
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if (!userAuth) return;
  
  const userRef = firestore.doc(`Users/${userAuth.uid}`);
  const snapShot = await userRef.get()

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName, email, createdAt, ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
//export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;