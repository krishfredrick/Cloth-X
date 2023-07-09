import React from 'react'
// import {  createUserDocFromAuth, signInWithGooglePopUp} from '../../utils/firebase.utils'
import SignIn from '../../Components/sign-in/SignIn';
import SignUp from '../../Components/sign-up/SignUp';
import './Authentication.styles.scss'
function Authentication() {
  return (
    <div className='auth_container'>
      <SignIn/>
      <SignUp />
    </div>
  )
}

export default Authentication
