import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/homePresenter";
import SignUp from "./components/Auth/signUpPresenter";
import Login from "./components/Auth/loginPresenter";
import Profile from "./components/Profile/profilePresenter";
import ErrorPage from "./shared/errorpage";
//import { LibraryTab } from '../components/Profile/collection';
//import ToWatch from '../components/Profile/towatch';
import LandingPagePresenter from "./components/LandingPage/LandingPagePresenter";
import Top100 from "./components/Home/top100";
import MovieView from "./components/Home/movieView";
import TVshows from "./components/Home/TVshows";
import Search from "./components/Search/searchPresenter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPagePresenter />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "top100",
        element: <Top100 />,
      },
      {
        path: "movies",
        element: <MovieView />,
      },
      {
        path: "shows",
        element: <TVshows />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;