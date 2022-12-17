import * as React from "react";
import { useNavigate } from "react-router-dom";

import LandingPage from "./LandingPage";

export default function LandingPagePresenter() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <LandingPage
      signupClick={handleSignupClick}
      loginClick={handleLoginClick}
    />
  );
}
