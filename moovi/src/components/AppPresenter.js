import * as React from "react";
import Header from './UI/header';
import StickyFooter from './UI/footer';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Sidebar from './Home/sidebar';
import Main from './Home/main';
import logo from '../logo32.webp';
import '../App.css';

// for test
const catimg = 'http://placekitten.com/g/200/300'
const sidebar = {
  title: 'Trending',
  movielist: [
    { title: 'testtitle1', img: catimg, url: '#' },
    { title: 'testtitle2', img: catimg, url: '#' },
    { title: 'testtitle3', img: catimg, url: '#' },
  ],
}
const sections = [
  { title: 'Movies', url: '#' },
  { title: 'TV Shows', url: '#' },
  { title: 'Best Awards 2022', url: '#' }
]

export default function AppPresenter() {
    return (
        <div className="App">
          <Container maxWidth='lg'>
            <Header title='Moovi' logo={logo} sections={sections} />
            <Grid container spacing={4}>
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Main />
              <Sidebar title={sidebar.title} movielist={sidebar.movielist} />
            </Grid>
          </Container>
          <StickyFooter />
        </div>
    );
}