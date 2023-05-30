import React from "react";

import "./nameText.scss";

export const NameText = ({ name }: { name: string }) => {
  return <p className="name-text">{name}</p>;
};
