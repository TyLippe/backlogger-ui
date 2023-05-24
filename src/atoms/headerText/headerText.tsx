import React from "react";

import "./headerText.scss";

export const HeaderText = ({ text }: { text: string }) => {
  return <h1 className="header-text">{text}</h1>;
};
