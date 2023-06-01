import React from "react";

import "./gameCard.scss";
import { CoverArt, BodyText } from "../../atoms";

export const GameCard = ({ game }: { game: any }) => {
  const { name, coverURL } = game;
  return (
    <div className="game-card-container">
      <CoverArt name={name} coverURL={coverURL} />
      <BodyText text={name} />
    </div>
  );
};
