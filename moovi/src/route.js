import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomeView from './components/Home/home'
import SignUpPresenter from './components/Auth/signUpPresenter';
import LoginPresenter from './components/Auth/loginPresenter'
import ProfileMain from './components/Profile/main';
import ErrorPage from './shared/errorpage';
//import { LibraryTab } from '../components/Profile/collection';
//import ToWatch from '../components/Profile/towatch';
//import LandingPagePresenter from '..'
import Top100 from './components/Home/top100';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomeView />,
            },
            {
                path: 'mine',
                element: <ProfileMain />,
            },
            {
                path: 'top100',
                element: <Top100 />
            }
        ]
    },
    {
        path: 'signup',
        element: <SignUpPresenter />
    },
    {
        path: 'login',
        element: <LoginPresenter />
    }
])

export default router