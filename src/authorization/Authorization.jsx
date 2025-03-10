import React, { createContext, useState } from "react";
import { 
  getAuth, 
  GoogleAuthProvider, 
  GithubAuthProvider, 
  signInWithPopup, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { app } from "../firebase.init";




 export const AuthContext=createContext(null)
 
const Authorization = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
  
    const auth = getAuth(app);
  
    //google login
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
      setLoader(true);
      return signInWithPopup(auth, googleProvider);
    };
  
    //github login
  
    const gitHubProvider = new GithubAuthProvider();
    const gitHubSignIn = () => {
      setLoader(true);
      return signInWithPopup(auth, gitHubProvider);
    };
  
    //user create
    const registerUser = (email, password) => {
      setLoader(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
    //user delete
    const userSignOut = () => {
      setLoader(true);
      return signOut(auth);
    };
    //user photo and url update
  
    //user sign in
    const userSignIn = (email, password) => {
      setLoader(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const authInfo = {
      user,
      setUser,
      loader,
      gitHubSignIn,
      googleSignIn,
      registerUser,
      userSignIn,
      userSignOut,
    };
  
    return (
   <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default Authorization;