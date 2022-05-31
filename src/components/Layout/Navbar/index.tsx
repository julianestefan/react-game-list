import { Grid } from "@mui/material";

import logo from "../../../assets/img/logo.png";
import styles from './styles.module.css'

function Navbar() {
  return (
    <Grid className={styles.header} container>
      <header >
        <nav>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </nav>
      </header>
    </Grid>
  );
}

export default Navbar;
