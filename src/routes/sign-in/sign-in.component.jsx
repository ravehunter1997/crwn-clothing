// import React, { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
//import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if(response){
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  return (
    <div>
      <h1>SIGN IN</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      {/* <br />
      <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
