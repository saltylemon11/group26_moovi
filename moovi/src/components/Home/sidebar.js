import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Sidebar(props) {
    const { title, movielist } = props

    return (
        <Grid item xs={12} md={4}>
            <Paper sx={{ bgcolor: 'grey.200'}}>
                <Typography>
                    {title}
                </Typography>
            </Paper>
            <Typography>
                Movie List
            </Typography>
            {movielist.map((m)=>(<Stack key={m.title}><img src={m.img} alt={m.title}></img><Link display='block' href={m.url} key={m.title}>
                {m.title}
            </Link>
            </Stack>
            ))}
        </Grid>
    )
}

export default Sidebar