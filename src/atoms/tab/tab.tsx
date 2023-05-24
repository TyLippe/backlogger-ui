import React from "react";

import "./tab.scss";

export const Tab = ({ title }: { title: string }) => {
  return (
    <>
      <p className="tab">{title}</p>
    </>
  );
};
