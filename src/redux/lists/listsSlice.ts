import { createSlice } from "@reduxjs/toolkit";

export interface Game {
  [id: string]: GameDTO;
}

export interface GameDTO {
  name: string | null;
  id: number;
}

export interface List {
  [name: string]: ListDTO;
}

export interface ListDTO {
  name: string;
  userId: string;
  id: string;
  games: Game;
}

const initialState: List = {};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setInitialLists: (state, action) => {
      return action.payload;
    },
    addToList: (state, action) => {
      return {
        ...state,
        // eslint-disable-next-line
        ["Backlog"]: {
          ...state["Backlog"],
          games: {
            ...state["Backlog"].games,
            [action.payload.id]: action.payload,
          },
        },
      };
    },
  },
});

export const { setInitialLists, addToList } = listSlice.actions;

export default listSlice.reducer;
