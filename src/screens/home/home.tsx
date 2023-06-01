import React from "react";

import "./home.scss";
import { BodyText, HeaderText } from "../../atoms";

export const HomeScreen = () => {
  return (
    <div className="home-container">
      <HeaderText text="Welcome to Backlogger" />
      <BodyText
        text={
          "This is an in progress application that hopes to bring a new solution to how you handle your gaming backlog!"
        }
      />
      <br />
      <BodyText
        text={
          "Message AmazingLippe on Discord with any feature requests or bugs found! Thank you for your patience."
        }
      />
    </div>
  );
};
