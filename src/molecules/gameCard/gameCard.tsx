import React from "react";

import "./gameCard.scss";
import { CoverArt, HelperText, NameText } from "../../atoms";

export const GameCard = ({ game }: { game: any }) => {
  const { name, coverURL, platforms } = game;
  return (
    <div className="game-card-container">
      <div className="art-and-name-container">
        <CoverArt name={name} coverURL={coverURL} />
        <NameText name={name} />
      </div>
      <div className="footer">
        <HelperText text={platforms?.join(" || ") || ""} />
      </div>
    </div>
  );
};
