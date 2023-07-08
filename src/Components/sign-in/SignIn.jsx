import React from 'react'
import { createUserDocFromAuth, signInWithGooglePopUp } from '../../utils/firebase.utils'
// import {} 
function SignIn() {
  const logGoogleUser = async()=>{
    const {user} = await signInWithGooglePopUp();
    // console.log(response);
    const userDocRef = await createUserDocFromAuth(user)
  }
  return (
    <div>
      Sign in page
      <button  onClick={logGoogleUser}> Sign in Google</button>
    </div>
  )
}

export default SignIn
