import React from "react";
import { googleLogout } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../app/store";
import { logoutUser } from "../../redux/user/userSlice";

import "./user.scss";

export const UserScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const logOut = () => {
    googleLogout();
    dispatch(logoutUser());
  };

  return (
    <div className="user-container">
      <h1>User</h1>
      <p>Name: {user.name}</p>
      <button onClick={logOut}>Log out</button>
    </div>
  );
};
