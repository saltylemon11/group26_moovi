import React from "react";
import { Pagination } from "@mui/material";
import { Stack } from "@mui/material";
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


function SearchView(props) {
    const { setQuery, data, count, page, setPage, currentData, setCurrentData } = props
    const [q, setQ] = React.useState('')
    const [bdOpen, setBdOpen] = React.useState(false)

    const perPage = 10

    const handleChange = (e, p) => {
        setPage(p)
        setCurrentData(data.slice((p - 1) * perPage, p * perPage))
    }

    const handleQueryChange = (e) => {
        setQ(e.target.value)
    }

    const handleClick = (e) => {
        setBdOpen(true)
        setQuery({
            q: q
        })
    }

    return (
        <div>
            <Stack direction='column'>
                <Backdrop open={bdOpen}><CircularProgress color='inherit'/></Backdrop>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search movies"
                        inputProps={{ 'aria-label': 'search movies' }}
                        onChange={handleQueryChange}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleClick}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <List>
                    {currentData.map((item, index) => {
                        return (<ListItem>
                            <ListItemText
                                primary={item.title}
                                secondary={
                                    <Typography
                                        variant="caption"
                                    >
                                        {item.titleType}
                                    </Typography>
                                }
                            />
                        </ListItem>)
                    })}
                </List>
                <Pagination
                    count={count}
                    page={page}
                    onChange={handleChange}
                />
            </Stack>
        </div>
    )

}

export default SearchView