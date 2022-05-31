import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GameDTO } from "../../constants/dto/games.dto";
import { getGames } from "../../services/api/games.service";
import GameItem from "./GameItem";

function GameList() {
  const [games, setGames] = useState<GameDTO[]>([]);
  const[name, setName] = useState('');

  useEffect(() => {
    getGames().then((res) => {
      setName(res.CategoryGames[0].CategoryName)
      setGames(res.CategoryGames[0].Games);
    });
  }, []);

  return (
    <Grid container>
      <Typography width="100%" variant="h3" textAlign="center">
        {name}
      </Typography>
      {games.map((item) => (
        <GameItem
          imageurl={item.ImageUrlGame}
          name={item.GameName}
          key={item.GameID}
        />
      ))}
    </Grid>
  );
}

export default GameList;
