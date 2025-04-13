/** @format */

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { loggedInUser } = useContext(UserContext);

  // If the user is not logged in, redirect to the login page
  if (!loggedInUser) {
    return <Navigate to="/login" />;
  }

  // If the user is logged in, render the children components
  return children;
};

export default PrivateRoute;
