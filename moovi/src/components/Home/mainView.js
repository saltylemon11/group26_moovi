import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
//import Typography from '@mui/material/Typography';
//import Divider from '@mui/material/Divider';
import { SlideTrending, Slide } from "../../shared/movielists";

function MainView(props) {
  //const { title } = props;

  return (
    <Grid item xs={12} md={8}>
      <SlideTrending title="Trending" />
      <Slide title="Movies" />
      <Slide title="Shows" />
    </Grid>
  );
}

MainView.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainView;
