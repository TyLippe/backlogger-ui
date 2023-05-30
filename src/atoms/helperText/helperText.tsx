import React from "react";

import "./helperText.scss";

export const HelperText = ({ text }: { text: string }) => {
  return <p className="helper-text">{text}</p>;
};
