import { Grid, Typography } from "@mui/material";

import styles from "./styles.module.css";

interface GameItemProps {
  name: string;
  imageUrl: string;
}

function GameItem({ name, imageUrl }: GameItemProps) {
  return (
    <Grid item xs={6} md={3}>
      <img className={styles.image} src={imageUrl} alt={name} />
      <Typography variant="h3"> {name} </Typography>
    </Grid>
  );
}

export default GameItem;
