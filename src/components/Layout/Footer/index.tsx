import { Button } from "@mui/material";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

import styles from './styles.module.css'

function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <Button className={styles.actionButton} variant="contained" color="primary">
        <DensityMediumIcon />
      </Button>
    </footer>
  );
}

export default Footer;
