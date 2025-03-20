import React, { useContext } from "react";
import { AuthContext } from "../authorization/Authorization";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location=useLocation()

  if (loader) {
    return <LoadingPage></LoadingPage>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
