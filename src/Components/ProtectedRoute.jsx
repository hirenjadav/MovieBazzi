import React from "react";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../services/authServices";

function ProtectedRoute({ component: Component }) {
  const user = getCurrentUser();
  return user !== null ? <Component /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
