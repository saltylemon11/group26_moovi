import React from 'react';
import logo from './logo32.webp';
import './App.css';
import Header from './components/UI/header';
import StickyFooter from './components/UI/footer';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Sidebar from './components/Home/sidebar';
import Main from './components/Home/main';
//import { CreateBrowserRouter, RouterProvider, Route, createBrowserRouter } from 'react-router-dom'

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

function App() {

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

export default App;
