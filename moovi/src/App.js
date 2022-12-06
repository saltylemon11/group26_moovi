import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
//import { CreateBrowserRouter, RouterProvider, Route, createBrowserRouter } from 'react-router-dom';
import LandingPagePresenter from './components/LandingPagePresenter';
import AppPresenter from './components/AppPresenter';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPagePresenter />} />
          <Route path='/HomePage' element={<AppPresenter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
