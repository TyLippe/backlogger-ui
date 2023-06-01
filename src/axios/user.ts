import axios from "axios";

import { upsertList } from "./lists";
import { createStandardLists } from "../assets/standardLists";

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
        // Create new user and standard lists since new user
        const newUser = await upsertUser(userData);
        const standardLists = createStandardLists(userData.email);
        for (let listData of standardLists) {
          await upsertList(listData, userData.email);
        }
        return newUser;
      }
    });
};

export const upsertUser = async (userData: any) => {
  return await axios
    .put(`${backloggerAPI}/users`, {
      name: userData.name,
      email: userData.email,
      username: userData.username,
    })
    .then(async (res) => {
      if (res.data) {
        return res.data;
      }
    });
};
