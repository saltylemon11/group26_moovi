import React from "react";
import MasonryImageList from '../../shared/MasonryImageListUI'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";

function ShowsView(props) {
  const { data } = props
  // id, title, url(rottentomatoes), img, year

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>Trending</Typography>
        <Box sx={{ height: '100vh' }}>
          <MasonryImageList data={data} />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default ShowsView