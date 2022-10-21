import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
const location = useLocation();
if(loading){
    return  <Spinner animation="grow" variant="success" />
}

  if (!user) {
    return <Navigate to="/login" state={{from: location}} replace />;
  }
  return children;
};

export default PrivateRoute;

/* 
1. only allow authenticated user to visit the route
2.
3. Redirect user to the route they wanted to go before login

*/
