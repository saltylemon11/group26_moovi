import * as React from 'react';
import {useNavigate} from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';

export default function LandingPagePresenter() {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate('/HomePage');
    };
    const handleLoginClick = () => {
        navigate('/HomePage');
    };

    return (
        <LandingPage 
        signupClick={handleSignupClick} 
        loginClick={handleLoginClick}/>
    );
}