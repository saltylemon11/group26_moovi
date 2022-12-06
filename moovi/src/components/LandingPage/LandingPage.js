import * as React from 'react';
import { Button } from '@mui/material';
import '../StarBackground.css';

export default function LandingPage({ signupClick, loginClick }) {
    return (
        <div className='star-background'>
            <div className='stars1'></div>
            <div className='stars2'></div>
            <div className='stars3'></div>
            <div className='landing-title'>
                <span>
                    Welcome to Moovi
                </span>
            </div>
            <div className='landing-buttons'>
                <Button size='large' className='landing-title' onClick={signupClick}>
                    <span>Sign up</span>
                </Button>
                <Button size='large' className='landing-title' onClick={loginClick}>
                    <span>Log in</span>
                </Button>
            </div>
        </div>
    )
}