export const backloggerAPI =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : "http://localhost:3001";

export const tabs = [
  {
    name: "Home",
    directTo: "/",
  },
  {
    name: "Games",
    directTo: "/games",
  },
  {
    name: "User",
    directTo: "/user",
  },
];
