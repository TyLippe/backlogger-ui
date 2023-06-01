import React, { MouseEventHandler } from "react";

import "./gameCard.scss";
import { CoverArt, BodyText } from "../../atoms";

export const GameCard = ({
  game,
  handleOnClick,
}: {
  game: any;
  handleOnClick: MouseEventHandler;
}) => {
  const { name, coverURL } = game;
  return (
    <div className="game-card-container" onClick={handleOnClick}>
      <CoverArt name={name} coverURL={coverURL} />
      <BodyText text={name} />
    </div>
  );
};
