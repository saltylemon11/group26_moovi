import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { SlideTrending, Slide } from '../UI/movielists';

function Main(props) {
  const { title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <SlideTrending title='Trending'/>
      <Slide title="Movies" />
      <Slide title="Shows" />
    </Grid>
  );
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Main;