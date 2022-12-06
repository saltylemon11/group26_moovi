import React from 'react';
import './App.css';
import Header from './components/UI/header';
import { StickyFooter } from './components/UI/footer';
import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid';
import logo from './logo32.webp'
import { Outlet } from 'react-router-dom';

// for test
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
        <Grid container spacing={0}>
        </Grid>
        <Outlet />
      </Container>
      <StickyFooter />
    </div>
  );
}

export default App;
