import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener, signOutUser } from "../utils/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser:()=>null,
})

export const UserProvider = ({children})=>{
  const [currentUser, setCurrentUser] = useState(null)
  const value = {currentUser, setCurrentUser}
  // signOutUser();
  useEffect(()=>{
   const unSubscribe =  onAuthStateChangedListener(async(user)=>{
    if(user){
     createUserDocFromAuth(user);
    }
    // console.log("added user", user);
    setCurrentUser(user);
   },[]);
   return unSubscribe;
  })
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
