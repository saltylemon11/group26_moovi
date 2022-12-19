import * as React from 'react';
import Grid from '@mui/material/Grid';
import { ItemList } from '../Profile/collection';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
const catimg = { img: 'http://placekitten.com/g/200/200', title: 'Soft Kitties', description: 'A movie for cat lovers.', date: '2022-12-02', myrate: '0.0' }
const itemData = new Array(9).fill(catimg)
const handleChoose = (event) => {
/* go to movie detail ? */
}
function SearchResult(props){
    return (
        <ThemeProvider theme={theme}>
        <Grid container onClick={handleChoose} spacing={4}>
        <ItemList listData={itemData} />
    </Grid>
    </ThemeProvider>
    )
}
export default SearchResult
