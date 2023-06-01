import React, { useState } from "react";
import { googleLogout } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import { logoutUser, setUser } from "../../redux/user/userSlice";
import { HeaderText, TextInput } from "../../atoms";
import { upsertUser } from "../../axios/user";

import "./user.scss";

export const UserScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const lists = useSelector((state: RootState) => state.lists);

  const [username, setUsername] = useState("");
  const [changeUsername, setChangeUsername] = useState(false);

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
    setChangeUsername(false);
  };

  return (
    <div className="user-container">
      <div className="user-header">
        <HeaderText text={user.username || user.name} />
        <button onClick={logOut}>Log out</button>
      </div>

      {!changeUsername && (
        <div className="username-change-input">
          <button onClick={() => setChangeUsername(!changeUsername)}>
            Change Username?
          </button>
        </div>
      )}

      {changeUsername && (
        <div className="username-change-input">
          <TextInput
            handleChange={handleUsernameChange}
            handleSubmit={handleSubmit}
            name={"seach"}
            value={username}
            placeholder="New Username"
            submitText="Submit"
          />
          <button onClick={() => setChangeUsername(false)}>Cancel</button>
        </div>
      )}

      <div className="lists-container">
        {Object.values(lists).map((list) => {
          return (
            <div className="list-box">
              <h1>{`${list.name}`}</h1>
              {Object.values(list.games).map((game) => {
                return <li>{game.name}</li>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
