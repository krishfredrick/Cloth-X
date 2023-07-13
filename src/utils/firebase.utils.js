// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
  signInWithPopup,
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

import {
  getDoc,
  getFirestore,
  doc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
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

const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.getCustomParameters({
  "prompt": "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopUp = ()=> signInWithPopup(auth, GoogleProvider)
export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth, GoogleProvider)
export const db =  getFirestore();

export const addCollectionAndDoc = async(collection_key, obj)=>{
  const batch = writeBatch(db);
  const collection_ref = collection(db,collection_key);
  obj.forEach(element => {
    const doc_ref = doc(collection_ref, element.title.toLowerCase());
    batch.set(doc_ref, element);
  });
  
  await batch.commit();
}

export const getCollectionAndDoc = async()=>{
  const collection_ref = collection(db,'category');
  const qry = query(collection_ref);
  const qry_snap_shot = await getDocs(qry);
  const categoryMap = qry_snap_shot.docs.reduce((acc, docSnapShot)=>{
    const {title, items} = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})

  return categoryMap;

}

export const createUserDocFromAuth = async(userAuth, additionalInfo={})=>{
  if(!userAuth) return;
  const userDocRef = doc(db,'users',userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());

  if(!userSnapShot.exists()){
    const {displayName, email} =userAuth;
    const createdAt = new Date();    

    try {

      await setDoc(userDocRef,{
        email,
        displayName,
        createdAt, 
        ...additionalInfo
      })
      
    } catch (error) {
      console.log("error in storing User:" , error.message)
    }
  }

  return userDocRef;
}

export const createAuthWithUserEmailAndPassword = async(email, password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async()=> await signOut(auth);

export const onAuthStateChangedListener = (cb)=>onAuthStateChanged(auth, cb);





