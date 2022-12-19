import * as React from 'react';
import PropTypes from 'prop-types';
//import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container } from '@mui/system';
import LibraryUI from './libraryUI';
import MovieListUI from './movieListUI';
//import Settings from './settings';
import Tracker from './tracker';
import recordTypes from '../../shared/recordTypes';

// for test
const avatar = 'https://placekitten.com/100/100'


function ProfileView(props) {
    //const { username, avatar } = props;
    const [value, setValue] = React.useState('1');
    const { user, data } = props
    const { displayName, email, photoURL, uid } = user

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Container maxWidth="lg">
                <Stack direction='row'>
                    <img src={avatar} alt={email} />
                    <Typography variant="h3" gutterBottom>
                        {email}
                    </Typography>
                </Stack>
                <Divider />
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Library" value="1" />
                                <Tab label="Tracker" value="2" />
                                <Tab label='|' disabled />
                                <Tab label="To Watch" value='4' />
                                <Tab label='In Progress' value='5' />
                                <Tab label='Watched' value='6' />
                                <Tab label="Dropped" value='7' />
                                {/*
                                <Tab label='|' disabled />
                                <Tab label='Settings' value='8' />
    */}
                            </TabList>
                        </Box>
                        <TabPanel value="2">
                            <Stack direction='column'>
                                <Typography variant="h4" gutterBottom>
                                    Series Tracker
                                </Typography>
                                <Tracker data={data.filter(i => i.status === recordTypes.IN_PROGRESS)} />
                                {/* <ListTimeline /> */}
                            </Stack>
                        </TabPanel>
                        <TabPanel value="1">
                            <LibraryUI data={data} />
                        </TabPanel>
                        <TabPanel value='4'>
                            <MovieListUI status={recordTypes.TO_WATCH} data={data.filter(i => i.status === recordTypes.TO_WATCH)} />
                        </TabPanel>
                        <TabPanel value='5'>
                            <MovieListUI status={recordTypes.IN_PROGRESS} data={data.filter(i => i.status === recordTypes.IN_PROGRESS)} />
                        </TabPanel>
                        <TabPanel value='6'>
                            <MovieListUI status={recordTypes.WATCHED} data={data.filter(i => i.status === recordTypes.WATCHED)} />
                        </TabPanel>
                        <TabPanel value='7'>
                            <MovieListUI status={recordTypes.DROPPED} data={data.filter(i => i.status === recordTypes.DROPPED)} />
                        </TabPanel>

                        {/*<TabPanel value='8'>
                            <Settings />
                        </TabPanel>
    */}
                    </TabContext>
                </Box>
            </Container>
        </div>
    );
}

ProfileView.propTypes = {
    username: PropTypes.string.isRequired,
};

export default ProfileView;