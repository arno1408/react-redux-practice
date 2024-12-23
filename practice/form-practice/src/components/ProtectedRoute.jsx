import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { RoleContext } from "./RoleProvider";

function ProtectedRoute({ element: Component, allowedRoles }) {
  const { user } = useContext(RoleContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/user" />;
  }

  return <Component />;
}

export default ProtectedRoute;
