import { ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Grid } from "@mui/material";


interface LayoutProps {
  children: ReactElement;
}

function Layout({ children }: LayoutProps) {
  return (
    <Grid container role="layout" >
      <Navbar />
      {children}
      <Footer />
    </Grid>
  );
}

export default Layout;
