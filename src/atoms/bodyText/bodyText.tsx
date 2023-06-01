import React from "react";

import "./bodyText.scss";

export const BodyText = ({ text }: { text: string }) => {
  return <p className="body-text">{text}</p>;
};
