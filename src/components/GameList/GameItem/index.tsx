import { Grid, Typography } from "@mui/material";

import styles from "./styles.module.css";

interface GameItemProps {
  name: string;
  imageurl: string;
}

function GameItem({ name, imageurl }: GameItemProps) {
  const url = process.env.REACT_APP_BASE_IMAGE_URL + imageurl;
  return (
    <Grid padding={2} item xs={6} md={3}>
      <img className={styles.image} src={url} alt={name} />
      <Typography variant="h6"> {name.replace('_', ' ')} </Typography>
    </Grid>
  );
}

export default GameItem;
