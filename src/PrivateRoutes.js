import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);

  return user.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
