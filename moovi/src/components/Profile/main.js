import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack'
import Header from '../UI/header';
import StickyFooter from '../UI/footer';

// for test
import logo from './logo32.webp';
const username = 'fluffyKitten'
const avatar = 'https://placekitten.com/100/100'
const sections = [
    { title: 'Movies', url: '#' },
    { title: 'TV Shows', url: '#' },
    { title: 'Best Awards 2022', url: '#' }
]


function ProfileMain(props) {
    //const { username, avatar } = props;

    return (
        <div>
            <Header title='Moovi' logo={logo} sections={sections} />
            <Grid
                item
                xs={12}
                md={8}
            >
                <Stack direction='row'>
                    <Typography variant="h6" gutterBottom>
                        {username}
                    </Typography>
                    <img src={avatar} alt={username} />
                </Stack>
                <Divider />
                {/* Quick Tracker */}
                {/* Timeline */}
            </Grid>
            <StickyFooter />
        </div>
    );
}

ProfileMain.propTypes = {
    username: PropTypes.string.isRequired,
};

export default ProfileMain;