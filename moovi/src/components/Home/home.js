import React from "react";
import Sidebar from '../Home/sidebar'
import Main from '../Home/main'
import Grid from '@mui/material/Grid'

// for test
const catimg = 'http://placekitten.com/g/200/300'
const sidebar = {
    title: 'Trending',
    movielist: [
        { title: 'Movie Title 1', img: catimg, url: '#' },
        { title: 'Movie Title 2', img: catimg, url: '#' },
        { title: 'Movie Title 3', img: catimg, url: '#' },
    ],
}

function Home() {
    return (
        <div>
            <Grid container spacing={5} sx={{ mt: 3 }}>
                <Main />
                <Sidebar title={sidebar.title} movielist={sidebar.movielist} />
            </Grid>
        </div>
    )
}

export default Home
