import React from "react";

import { HeaderText, Tab } from "../../atoms";
import "./header.scss";

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

export const Header = () => {
  return (
    <>
      <div className="header-container">
        <HeaderText text={"BackLogger"} />
        <div className="tabs-container">
          {tabs.map((tab) => {
            return (
              <>
                <Tab title={tab.name} />
              </>
            );
          })}
        </div>
      </div>
      <div className="border-bottom" />
    </>
  );
};
