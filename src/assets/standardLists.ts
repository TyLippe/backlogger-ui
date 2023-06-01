import { List } from "../redux/lists/listsSlice";

export const createStandardLists = (userId: string) => {
  return [
    {
      name: "Backlog",
      games: [],
      userId: userId,
    },
    {
      name: "Playing",
      games: [],
      userId: userId,
    },
    {
      name: "Beaten",
      games: [],
      userId: userId,
    },
  ] as List[];
};
