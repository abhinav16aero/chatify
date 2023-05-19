import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to the Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat and enable all cookies for the smooth experience. Also, wait for 10 sec for the chatroom to load.</p>
//       <button className="sign-in">
//         <img
//           onClick={googleSignIn}
//           src={GoogleSignin}
//           alt="sign in with google"
//           type="button"
//         />
//       </button>
    </main>
  );
};

export default Welcome;
