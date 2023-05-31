import React, { useState } from "react";
import { googleLogout } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../app/store";
import { logoutUser, setUser } from "../../redux/user/userSlice";

import "./user.scss";
import { SearchInput } from "../../atoms";
import { upsertUser } from "../../axios/user";

export const UserScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [username, setUsername] = useState("");

  const logOut = () => {
    googleLogout();
    dispatch(logoutUser());
  };

  const handleUsernameChange = (e: any) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await upsertUser({ ...user, username });
    dispatch(setUser(res));
  };

  return (
    <div className="user-container">
      <h1>User</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <SearchInput
        handleChange={handleUsernameChange}
        handleSubmit={handleSubmit}
        name={"seach"}
        value={username}
      />
      <button onClick={logOut}>Log out</button>
    </div>
  );
};
