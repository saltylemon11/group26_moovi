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
//import { Outlet } from 'react-router-dom';
import { ListCommon, ListTimeline } from '../UI/list';
import CollectionUI from './collection';

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
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Main Page" value="1" />
                                <Tab label="Collection" value="2" />
                                <Tab label="My Lists" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {/* Quick Tracker */}
                            {/* Timeline */}
                            <ListTimeline />
                        </TabPanel>
                        <TabPanel value="2">
                            <CollectionUI title='To Watch' />
                            <CollectionUI title='Watching' />
                            <CollectionUI title='Have Watched' />
                        </TabPanel>
                        <TabPanel value="3">
                            <ListCommon />
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