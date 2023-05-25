import axios from "axios";

const backloggerAPI =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : "http://localhost:3001";

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
