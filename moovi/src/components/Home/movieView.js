import * as React from "react";
import Grid from "@mui/material/Grid";
import { Slide } from "../../shared/movielists";
import "../../App.css";

export default function MovieView() {
  return (
    <Grid container spacing={5} sx={{ mt: 3 }} className="blur-background">
      <Slide title="Movies" />
    </Grid>
  );
}
