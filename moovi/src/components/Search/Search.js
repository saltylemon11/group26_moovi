import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
function Search(props){
    return (
        <ThemeProvider theme={theme}>
        <Grid container spacing={2}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button
            loading              
            type="search"
            size="medium"
            variant="text">Search</Button>
    </Grid>
    </ThemeProvider>
    )
}

export default Search