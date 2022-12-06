import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home/home'
import SignUp from '../components/Auth/signUp';
import SignIn from '../components/Auth/signIn'
import ProfileMain from '../components/Profile/main';
import ErrorPage from '../components/UI/errorpage';
import { LibraryTab } from '../components/Profile/collection';
import ToWatch from '../components/Profile/towatch';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'mine',
                element: <ProfileMain />,
                children: [
                    {
                        path: 'library',
                        element: <LibraryTab />
                    }
                ]
            }
        ]
    },
    {
        path: 'signup',
        element: <SignUp />
    },
    {
        path: 'login',
        element: <SignIn />
    },
    {
        path: 'towatch',
        element: <ToWatch />
    }
])

export default router