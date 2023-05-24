import React, { useState } from "react";
import { SearchInput } from "../../atoms";

import "./gamesScreen.scss";
import { getGames } from "../../axios/getGames";

export const GamesScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (e: any) => {
    const { name, value } = e.target;
    setSearchQuery(value);
  };

  const handleSearchSubmit = async (e: any) => {
    e.preventDefault();
    await getGames(searchQuery);
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
      <p>{searchQuery}</p>
    </div>
  );
};
