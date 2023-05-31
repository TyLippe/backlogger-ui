import React, { useState } from "react";
import { SearchInput } from "../../atoms";

import "./games.scss";
import { getGames } from "../../axios/games";
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
      <SearchInput
        handleChange={handleSearchQuery}
        handleSubmit={handleSearchSubmit}
        name={"seach"}
        value={searchQuery}
      />
      <div className="games-list">
        {gamesFound.map((game) => {
          return <GameCard game={game} />;
        })}
      </div>
    </div>
  );
};
