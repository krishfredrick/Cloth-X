import React from 'react'
// import {  createUserDocFromAuth, signInWithGooglePopUp} from '../../utils/firebase.utils'
import SignIn from '../../Components/sign-in/SignIn';
import SignUp from '../../Components/sign-up/SignUp';
import { AuthenticationContainer } from './Authentication.styles'
function Authentication() {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
}

export default Authentication
