import { useState } from "react";
import { GameDTO } from "../../constants/dto/games.dto";
import GameItem from "./GameItem";

function GameList() {
  const [games] = useState<GameDTO[]>([]);
  return (
    <div>
      GameList
      {games.map((item) => (
        <GameItem imageUrl={item.ImageUrlGame} name={item.GameName} key={item.GameID} />
      ))}
    </div>
  );
}

export default GameList;
