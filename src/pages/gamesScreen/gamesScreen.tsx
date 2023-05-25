import React, { useState } from "react";
import { SearchInput } from "../../atoms";

import "./gamesScreen.scss";
import { getGames } from "../../axios/getGames";

export const GamesScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [gamesFound, setGamesFound] = useState([]);

  const handleSearchQuery = (e: any) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const handleSearchSubmit = async (e: any) => {
    e.preventDefault();
    const data = await getGames(searchQuery);
    setGamesFound(data);
  };

  return (
    <div className="games-container">
      <h1>GAMING</h1>
      <SearchInput
        handleChange={handleSearchQuery}
        handleSubmit={handleSearchSubmit}
        name={"seach"}
        value={searchQuery}
      />
      <div className="games-list">
        {gamesFound.map((game) => {
          return (
            <div className="game-container">
              <img
                className="cover-art"
                src={
                  game.coverURL || require("../../assets/placeholder_cover.jpg")
                }
                alt={`${game.name} Cover Art`}
              />
              <p>{game.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
