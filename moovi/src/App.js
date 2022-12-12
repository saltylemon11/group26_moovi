import React from 'react';
import './App.css';
import Header from './shared/header';
import { StickyFooter } from './shared/footer';
import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid';
import logo from './shared/logo32.webp'
import { Outlet } from 'react-router-dom';

// for test
const sections = [
  { title: 'Movies', url: '#' },
  { title: 'TV Shows', url: '#' },
  { title: 'IMDb Top 100 Movies', url: 'top100' }
]

function App() {

  return (
    <div className="App">
      <Container maxWidth='lg'>
        <Header title='Moovi' logo={logo} sections={sections} />
        <Grid container spacing={0}>
        </Grid>
        <Outlet />
      </Container>
      <StickyFooter />
    </div>
  );
}

export default App;
