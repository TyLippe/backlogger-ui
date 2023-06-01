import axios from "axios";

const backloggerAPI =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : "http://localhost:3001";

export const getUserLists = async (userId: any) => {
  return await axios
    .get(`${backloggerAPI}/lists/userId/${userId}`)
    .then(async (res) => {
      return res.data;
    });
};

export const upsertList = async (listData: any, userId: string) => {
  return await axios
    .put(`${backloggerAPI}/lists`, {
      name: listData.name,
      games: listData.games,
      id: listData?.id,
      userId,
    })
    .then(async (res) => {
      return res.data;
    });
};
