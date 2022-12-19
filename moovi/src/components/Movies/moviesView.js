import React from "react";
import MasonryImageList from '../../shared/MasonryImageListUI'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography, Stack, Divider } from "@mui/material";

function MoviesView(props) {
    return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Box sx={{ height: '100vh' }}>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <Box>
                  <Typography>Trending</Typography>
                  <MasonryImageList width={'50vh'} />
                </Box>
                <Box>
                  <Typography>Coming Soon</Typography>
                  <MasonryImageList width={'50vh'} />
                </Box>
              </Stack>
            </Box>
          </Container>
        </React.Fragment>
      );
}

export default MoviesView