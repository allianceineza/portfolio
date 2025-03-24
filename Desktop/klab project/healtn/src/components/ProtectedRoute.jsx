// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const protectedRoute = ({ allowedRoles }) => {
//   const token = localStorage.getItem("token");
//   const user = JSON.parse(localStorage.getItem("user"));

//   if (!token) {
//     return <Navigate to="/home" replace />;
//   }

//   if (!user || !allowedRoles || !allowedRoles.includes(user.role)) {
//     return <Navigate to="/home" replace />;
//   }

//   return <Outlet />;
// };

// export  default protectedRoute
