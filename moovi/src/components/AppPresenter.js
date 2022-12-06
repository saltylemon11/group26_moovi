import * as React from "react";
import Header from "./UI/header";
import StickyFooter from "./UI/footer";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import logo from "../logo32.webp";
import { Outlet } from "react-router-dom";
import "./App.css";

// for test
const sections = [
  { title: "Movies", url: "#" },
  { title: "TV Shows", url: "#" },
  { title: "Best Awards 2022", url: "#" },
];

export default function AppPresenter() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header title="Moovi" logo={logo} sections={sections} />
        <Grid container spacing={0}></Grid>
        <Outlet />
      </Container>
      <StickyFooter />
    </div>
  );
}
