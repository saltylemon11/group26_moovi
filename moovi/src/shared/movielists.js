/*
  Some reusable UI components
*/
import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Link from "@mui/material/Link";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ImageListWithText } from "./list";
//import { Card, CardContent, CardMedia} from '@mui/material'

// for test
const catimg = "http://placekitten.com/g/300/400";
//const title = 'Trending'
const movielist = [
  { title: "Title 1", img: catimg, url: "#" },
  { title: "Title 2", img: catimg, url: "#" },
  { title: "Title 3", img: catimg, url: "#" },
];

/*
    Trending
*/
function SlideTrending(props) {
  const { title } = props;
  //const { title, movielist } = props;

  return (
    <Grid item xs={12} md={8} spacing={2}>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "ghostwhite",
        }}
      >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Pagination count={3} />
      </Toolbar>
      <Divider />
      <ImageList sx={{ width: 450, height: 500 }}>
        {movielist.map((m) => (
          <ImageListItem key={m.img}>
            <img src={m.img} alt={m.title} loading="lazy" />
            <ImageListItemBar title={m.title} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
}

/*
  Movies & Shows
*/
function Slide(props) {
  const { title } = props;
  const [value, setValue] = React.useState("1");
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  {
    /* return 
  (
    <Grid
      item
      xs={12}
      md={8}
      spacing={2}
    >
      <Box>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'ghostwhite' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderColor: 'divider'}}>
        <TabList onChange={handleChange}>
          <Tab label='genre1' />
          <Tab label='genre2' />
          <Tab label='genre3' />
        </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
  <TabPanel value="2">Item Two</TabPanel>
  <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
      </Toolbar>
      </Box>
    </Grid>
  );
  */
  }

  return (
    <Box sx={{ width: "fit-content", typography: "h1" }}>
      <Typography variant="h4" gutterBottom textAlign="left">
        {title}
        <Typography variant="body1">
          <Link href="#">More</Link>
        </Typography>
      </Typography>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="genre1" value="1" />
            <Tab label="genre2" value="2" />
            <Tab label="genre3" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <SlideTab listData={movielist} />
        </TabPanel>
        <TabPanel value="2">
          <SlideTab listData={movielist} />
        </TabPanel>
        <TabPanel value="3">
          <SlideTab listData={movielist} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

function SlideTab(props) {
  const { listData } = props;
  return (
    <div>
      <ImageListWithText listData={listData} />
      {/* TODO: Controlled pagination */}
      <Pagination count={3} />
    </div>
  );
}

SlideTrending.propTypes = {
  title: PropTypes.string.isRequired,
};

export { SlideTrending, Slide };
