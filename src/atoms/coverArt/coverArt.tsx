import React from "react";

import "./coverArt.scss";

export const CoverArt = ({
  coverURL,
  name,
}: {
  coverURL: string;
  name: string;
}) => {
  return (
    <img
      className="cover-art"
      src={coverURL || require("../../assets/placeholder_cover.jpg")}
      alt={`${name} Cover Art`}
    />
  );
};
