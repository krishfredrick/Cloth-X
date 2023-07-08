// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
  signInWithPopup,
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider
} from 'firebase/auth'

import {
  getDoc,
  getFirestore,
  doc,
  setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb97Ci08vkAtleMb7cUuZWQRjIxr7F4PA",
  authDomain: "cloth-x-db.firebaseapp.com",
  projectId: "cloth-x-db",
  storageBucket: "cloth-x-db.appspot.com",
  messagingSenderId: "288545689431",
  appId: "1:288545689431:web:31d4d977e3a9657991f812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
  "prompt": "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopUp = ()=> signInWithPopup(auth, provider)

export const db =  getFirestore();

export const createUserDocFromAuth = async(userAuth)=>{
  const userDocRef = doc(db,'users',userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());

  if(!userSnapShot.exists()){
    const {displayName, email} =userAuth;
    const createdAt = new Date();
    console.log(displayName, email, createdAt);
    

    try {

      await setDoc(userDocRef,{
        email,
        displayName,
        createdAt
      })
      
    } catch (error) {
      console.log("error in storing User:" , error.message)
    }
  }

  return userDocRef;
}









