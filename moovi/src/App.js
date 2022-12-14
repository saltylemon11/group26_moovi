import React from 'react';
import './App.css';
import Header from './shared/header';
import { StickyFooter } from './shared/footer';
import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid';
import logo from './shared/logo32.webp'
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './authContext';
import { auth } from './services/firebase'
import { onAuthStateChanged } from 'firebase/auth';

// for test
const sections = [
  { title: 'Movies', url: '#' },
  { title: 'TV Shows', url: '#' },
  { title: 'IMDb Top 100 Movies', url: 'top100' }
]

function App() {

  const [currentUser, setCurrentUser] = React.useState(null)
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <AuthProvider value={{ currentUser }}>
      <div className="App">
        <Container maxWidth='lg'>
          <Header title='Moovi' logo={logo} sections={sections} />
          <Grid container spacing={0}>
          </Grid>
          <Outlet />
        </Container>
        <StickyFooter />
      </div>
    </AuthProvider>
  );
}

export default App;
