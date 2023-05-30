import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  picture: any;
  loggedIn: boolean;
}

const initialState = {
  name: "",
  email: "",
  picture: "",
  loggedIn: false,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.picture = action.payload.picture;
      state.loggedIn = true;
    },
    logoutUser: () => initialState,
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
