import React from "react";

import "./gameCard.scss";
import { CoverArt, BodyText } from "../../atoms";

export const GameCard = ({ game }: { game: any }) => {
  const { name, coverURL, platforms } = game;
  return (
    <div className="game-card-container">
      <div className="art-and-name-container">
        <CoverArt name={name} coverURL={coverURL} />
        <BodyText text={name} />
      </div>
      <div className="footer">
        <BodyText text={platforms?.join(" || ") || ""} />
      </div>
    </div>
  );
};
