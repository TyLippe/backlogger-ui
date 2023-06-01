import axios from "axios";

import { backloggerAPI } from "../utils/variables";

export const getGames = async (gameTitle: string) => {
  return await axios
    .get(`${backloggerAPI}/games`, {
      params: {
        gameTitle,
      },
    })
    .then((res) => {
      return Object.values(res.data);
    });
};

export const getGameNamesById = async (ids: number[]) => {
  return await axios
    .get(`${backloggerAPI}/games/namesByIds`, {
      params: {
        ids,
      },
    })
    .then((res) => {
      console.log(res.data);
    });
};
