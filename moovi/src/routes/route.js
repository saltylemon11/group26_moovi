import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/homePresenter";
import SignUp from "../components/Auth/signUpPresenter";
import Login from "../components/Auth/loginPresenter";
import Profile from "../components/Profile/profilePresenter";
import ErrorPage from "../shared/errorpage";
import { LibraryTab } from "../components/Profile/collection";
import ToWatch from "../components/Profile/towatch";
import LandingPagePresenter from "../components/LandingPage/LandingPagePresenter";
import RecommendationPresenter from "../components/Recommendation/recommendationPresenter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPagePresenter />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "mine",
        element: <Profile />,
        children: [
          {
            path: "library",
            element: <LibraryTab />,
          },
        ],
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
  {
    path: "towatch",
    element: <ToWatch />,
  },
  {
    path: "/recommendation",
    element: <RecommendationPresenter />,
  },
]);

export default router;
