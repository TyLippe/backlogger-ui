import React from "react";

import "./tab.scss";

export const Tab = ({
  title,
  handleOnClick,
}: {
  title: string;
  handleOnClick: () => void;
}) => {
  return (
    <>
      <p className="tab" onClick={() => handleOnClick()}>
        {title}
      </p>
    </>
  );
};
