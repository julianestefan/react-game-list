import { useState } from "react";
import { GameDTO } from "../../constants/dto/games.dto";
import GameItem from "./GameItem";

function GameList() {
  const [games, setGames] = useState<GameDTO[]>([]);
  return (
    <div>
      GameList
      {games.map((item) => (
        <GameItem key={item.GameID} />
      ))}
    </div>
  );
}

export default GameList;
