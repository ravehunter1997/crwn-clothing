//import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
import React from "react";

const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if(response){
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  return (
    <div className="sign-in-container">
      {/* <h1>Sign In Page</h1> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
