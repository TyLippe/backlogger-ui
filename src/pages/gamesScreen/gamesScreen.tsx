import React, { useState } from "react";
import { SearchInput } from "../../atoms";

import "./gamesScreen.scss";

export const GamesScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (e: any) => {
    const { name, value } = e.target;
    setSearchQuery(value);
  };

  return (
    <div className="games-container">
      <h1>GAMING</h1>
      <SearchInput
        handleChange={handleSearchQuery}
        name={"seach"}
        value={searchQuery}
      />
      <p>{searchQuery}</p>
    </div>
  );
};
