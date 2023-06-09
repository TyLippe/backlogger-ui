import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setUser } from "../../redux/user/userSlice";
import { setInitialLists } from "../../redux/lists/listsSlice";
import { redirectTo } from "../../utils/utils";
import { RootState } from "../../store";

import "./login.scss";
import { getUser } from "../../axios/user";
import { getUserLists } from "../../axios/lists";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const [googleResponse, setGoogleResponse] = useState(null);

  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleResponse(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (googleResponse) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${googleResponse.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then(async (res) => {
          const userData = await getUser(res.data);
          dispatch(setUser(userData));
          const listData = await getUserLists(userData.email);
          dispatch(setInitialLists(listData));
          redirectTo({ navigate, path: "/" });
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [googleResponse, user]);

  return (
    <div className="login-container">
      <h1>Welcome</h1>
      <button onClick={() => login()}>Sign in with Google</button>
    </div>
  );
};
