import axios from "axios";

const backloggerAPI =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : "http://localhost:3001";

export const getUser = async (userData: any) => {
  return await axios
    .get(`${backloggerAPI}/users/email/${userData.email}`)
    .then(async (res) => {
      if (res.data) {
        return res.data;
      } else {
        return await upsertUser(userData);
      }
    });
};

export const upsertUser = async (userData: any) => {
  return await axios
    .post(`${backloggerAPI}/users`, {
      name: userData.name,
      email: userData.email,
      username: userData.username,
      listIds: [],
    })
    .then(async (res) => {
      if (res.data) {
        return res.data;
      }
    });
};
