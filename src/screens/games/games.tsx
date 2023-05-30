import React, { useState } from "react";
import { SearchInput } from "../../atoms";

import "./games.scss";
import { getGames } from "../../axios/getGames";
import { GameCard } from "../../molecules/gameCard/gameCard";

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
              <GameCard game={game} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
