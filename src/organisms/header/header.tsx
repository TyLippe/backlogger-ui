import React from "react";
import { useNavigate } from "react-router-dom";

import { HeaderText, Tab } from "../../atoms";
import { redirectTo } from "../../utils/utils";
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
  const navigate = useNavigate();

  return (
    <>
      <div className="header-container">
        <HeaderText text={"BackLogger"} />
        <div className="tabs-container">
          {tabs.map((tab) => {
            return (
              <>
                <Tab
                  title={tab.name}
                  handleOnClick={() =>
                    redirectTo({ navigate, path: tab.directTo })
                  }
                />
              </>
            );
          })}
        </div>
      </div>
      <div className="border-bottom" />
    </>
  );
};
