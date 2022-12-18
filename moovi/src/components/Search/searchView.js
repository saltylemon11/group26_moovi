import React from "react";
import { Pagination } from "@mui/material";
import { Stack } from "@mui/material";
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


function SearchView(props) {
    const { setQuery, data, count, page, setPage, currentData, setCurrentData } = props
    const [q, setQ] = React.useState('')

    const perPage = 10

    const handleChange = (e, p) => {
        setPage(p)
        setCurrentData(data.slice((p - 1) * perPage, p * perPage))
    }

    const handleQueryChange = (e) => {
        setQ(e.target.value)
    }

    const handleClick = (e) => {
        setQuery({
            q: q
        })
    }

    const films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        {
            title: 'The Lord of the Rings: The Return of the King',
            year: 2003,
        },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 }
    ]

    return (
        <div>
            <Stack direction='column'>
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