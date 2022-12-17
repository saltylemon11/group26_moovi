import React from "react";
import SidebarView from "./sidebarView";
import MainView from "./mainView";
import Grid from "@mui/material/Grid";
import "../../App.css";

// for test
const catimg = "http://placekitten.com/g/200/300";
const sidebar = {
  title: "Trending",
  movielist: [
    { title: "Movie Title 1", img: catimg, url: "#" },
    { title: "Movie Title 2", img: catimg, url: "#" },
    { title: "Movie Title 3", img: catimg, url: "#" },
  ],
};

function HomeView() {
  return (
    <div>
      <Grid container spacing={5} sx={{ mt: 3 }} className="blur-background">
        <MainView />
        <SidebarView title={sidebar.title} movielist={sidebar.movielist} />
      </Grid>
    </div>
  );
}

export default HomeView;
