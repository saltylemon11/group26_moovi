import * as React from 'react';
import Grid from '@mui/material/Grid';
import Sidebar from '../Home/sidebar'
import Search from './Search';

const catimg = 'http://placekitten.com/g/200/300'
const sidebar = {
    title: 'Trending',
    movielist: [
        { title: 'testtitle1', img: catimg, url: '#' },
        { title: 'testtitle2', img: catimg, url: '#' },
        { title: 'testtitle3', img: catimg, url: '#' },
        { title: 'testtitle4', img: catimg, url: '#' },
        { title: 'testtitle5', img: catimg, url: '#' },
        { title: 'testtitle6', img: catimg, url: '#' },
        { title: 'testtitle7', img: catimg, url: '#' },
    ],
}
function SearchPage() {
    return (
        <div>
            <Grid container spacing={5} sx={{ mt: 3 }}>
                <Search />
                <Sidebar title={sidebar.title} movielist={sidebar.movielist} />
            </Grid>
        </div>
    )
}
export default SearchPage
