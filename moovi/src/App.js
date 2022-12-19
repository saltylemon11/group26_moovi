import React from "react";
import "./App.css";
import Header from "./shared/header";
import { StickyFooter } from "./shared/footer";
import Container from "@mui/system/Container";
import Grid from "@mui/material/Grid";
import logo from "./shared/logo32.webp";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./authContext";
import { auth } from "./services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// for test
const sections = [
  { title: "Movies", url: "movies" },
  { title: "TV Shows", url: "shows" },
  { title: "IMDb Top 100 Movies", url: "top100" },
];
//https://mui.com/material-ui/customization/dark-mode/
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthProvider value={{ currentUser }}>
      {/* <ThemeProvider theme={darkTheme}> */}
      <div className="App">
        <Header title="Moovi" logo={logo} sections={sections} />
        <Container>
          <Grid container spacing={0}></Grid>
          <Outlet />
        </Container>
        <StickyFooter />
      </div>
      {/* </ThemeProvider> */}
    </AuthProvider>
  );
}

export default App;
