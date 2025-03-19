import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase.init";
import axios from "axios";

export const AuthContext = createContext(null);

const Authorization = ({ children }) => {
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
  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };
  //user sign in
  const userSignIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    setUser,
    updateUserProfile,
    loader,
     setLoader,
    gitHubSignIn,
    googleSignIn,
    registerUser,
    userSignIn,
    userSignOut,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //JWT
      console.log("currentUser", currentUser,currentUser?.email);
       
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post(`http://localhost:5000/jwt`, user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            setLoader(false);
          })
          // .catch((error) => console.error("Logout error:", error))
          // .finally(() => setLoader(false));
      } 
      
      else {
        axios
          .post(`http://localhost:5000/logout`, {}, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            setLoader(false);
          })
          // .catch((error) => console.error("Logout error:", error))
          // .finally(() => setLoader(false));
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authorization;
