import "./App.css";
import Layout from "../Layout";
import GameList from "../GameList";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2d2e2c",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout>
          <GameList />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
