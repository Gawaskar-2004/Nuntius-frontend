// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ component: Component }) => {
//   const isAuthenticated = localStorage.getItem('token');

//   return isAuthenticated ? <Component /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;
// import React from "react";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem("userId") !== null;

//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
