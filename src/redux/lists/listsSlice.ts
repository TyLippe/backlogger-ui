import { createSlice } from "@reduxjs/toolkit";

export interface List {
  name: string;
  userId: string;
  id: string;
  games: number[];
}

const initialState: List[] = [];

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setInitialLists: (state, action) => {
      return action.payload;
    },
    addToList: (state, action) => {
      // Take listId and update
    },
  },
});

export const { setInitialLists, addToList } = listSlice.actions;

export default listSlice.reducer;
