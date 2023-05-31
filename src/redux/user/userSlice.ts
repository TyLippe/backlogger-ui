import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  username: string;
  isLoggedIn: boolean;
}

const initialState = {
  name: "",
  email: "",
  username: "",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.isLoggedIn = true;
    },
    logoutUser: () => initialState,
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
