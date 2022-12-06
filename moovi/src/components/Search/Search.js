import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Search(props){
    return (
        <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button
            loading              
            type="search"
            size="medium"
            variant="contained">Search</Button>
    </div>
    )
}

export default Search