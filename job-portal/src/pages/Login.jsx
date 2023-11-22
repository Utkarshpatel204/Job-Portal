import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate();
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  
  const handleLogin = ()=>{
    signInWithPopup(auth, googleProvider)
  .then((result) => {

    const user = result.user;
    navigate("/");
    
    
  }).catch((error) => {
    
    
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }







  return (
    <div className="h-screen w-full flex items-center justify-center">
      <button className="bg-blue px-8 py-2 text-white" onClick={handleLogin}>Login</button>

    </div>
  )
}

export default Login;
