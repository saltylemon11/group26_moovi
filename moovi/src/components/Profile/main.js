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
import { Outlet } from 'react-router-dom';
import { ListCommon, ListTimeline } from '../../shared/list';
import { LibraryTab } from './collection';
import ToWatch from './towatch';
import Watched from './watched';
import InProgress from './inprogress';
import SettingsView from './settings';
import Tracker from './tracker';

// for test
const username = 'fluffyKitten'
const avatar = 'https://placekitten.com/100/100'


function ProfileMain(props) {
    //const { username, avatar } = props;
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box>
                <Stack direction='row'>
                    <img src={avatar} alt={username} />
                    <Typography variant="h3" gutterBottom>
                        {username}
                    </Typography>
                </Stack>
                <Divider />
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    {/* TODO: Use Router */}
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Main Page" value="1" />
                                <Tab label="Library" value="2" />
                                <Tab label="My Lists" value="3" />
                                <Tab label='Friends' value='8' />
                                <Tab label='|' disabled />
                                <Tab label="To Watch" value='4' />
                                <Tab label='In Progress' value='5' />
                                <Tab label='Watched' value='6' />
                                <Tab label='|' disabled />
                                <Tab label='Settings' value='7' />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Stack direction='column'>
                                <Typography variant="h4" gutterBottom>
                                    Series Tracker
                                </Typography>
                                <Tracker />
                                <ListTimeline />
                            </Stack>
                        </TabPanel>
                        <TabPanel value="2">
                            <LibraryTab />
                        </TabPanel>
                        <TabPanel value="3">
                            <ListCommon />
                        </TabPanel>
                        <TabPanel value='4'>
                            <ToWatch />
                        </TabPanel>
                        <TabPanel value='5'>
                            <InProgress />
                        </TabPanel>
                        <TabPanel value='6'>
                            <Watched />
                        </TabPanel>
                        <TabPanel value='7'>
                            <SettingsView />
                        </TabPanel>
                        <TabPanel value='8'>
                            <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                                TODO: Friends List Here
                            </Box>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Box>
        </div>
    );
}

ProfileMain.propTypes = {
    username: PropTypes.string.isRequired,
};

export default ProfileMain;