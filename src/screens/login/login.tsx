import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setUser } from "../../redux/user/userSlice";
import { redirectTo } from "../../utils/utils";
import { RootState } from "../../app/store";

import "./login.scss";

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
        .then((res) => {
          dispatch(setUser(res.data));
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
