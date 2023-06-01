import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { getGames } from "../../axios/games";
import { TextInput } from "../../atoms";
import { GameCard } from "../../organisms";

import "./games.scss";
import { addToList } from "../../redux/lists/listsSlice";

export const GamesScreen = () => {
  const dispatch = useDispatch();

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

  const handleGameClick = (gameData: any) => {
    // For now let us add to backlog on click
    dispatch(addToList(gameData));
  };

  return (
    <div className="games-container">
      <TextInput
        handleChange={handleSearchQuery}
        handleSubmit={handleSearchSubmit}
        name={"seach"}
        value={searchQuery}
        placeholder="Search for games..."
        submitText="Search"
      />
      <div className="games-list">
        {gamesFound.map((game) => {
          return (
            <GameCard game={game} handleOnClick={() => handleGameClick(game)} />
          );
        })}
      </div>
    </div>
  );
};
