import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function ProfileSidebar(props) {
    // const { title, tagList } = props
    // for test
    const title = 'Tags'
    const tagList = [
        {title: 'Comedy', url:'#', num:'5'},
        {title: 'Romance', url: '#', num: '2'},
        {title: 'Cartoon', url: '#', num: '3'},
        {title: 'Biography', url:'#', num: '6'}
    ]

    return (
        <Grid item xs={12} md={4}>
            <Paper sx={{ bgcolor: 'grey.200' }}>
                <Typography>
                    {title}
                </Typography>
            </Paper>
            {tagList.map((m) => (<Stack key={m.title}><Link display='block' href={m.url} key={m.title}>
                {m.title}
            </Link>
            </Stack>
            ))}
        </Grid>
    )
}

export default ProfileSidebar