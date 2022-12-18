/* Use API: https://rapidapi.com/rapihub-rapihub-default/api/imdb-top-100-movies/ */
import React from "react";
import Pagination from "@mui/material/Pagination";
import { optionsIMDB100 } from "../../services/apiConfig";
import { Stack } from "@mui/material";
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { SearchItemUI } from "../../shared/searchItemUI";

function Top100() {
    const [data, setData] = React.useState([])
    const [error, setError] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(true)
    const [page, setPage] = React.useState(1)
    const [count, setCount] = React.useState()
    const [currentData, setCurrentData] = React.useState([])

    const option = optionsIMDB100
    const perPage = 10


    React.useEffect(() => {
        const fetchData = async () => {
            const op = {
                method: option.method,
                headers: {
                    'X-RapidAPI-Key': option.apiKey,
                    'X-RapidAPI-Host': option.apiHost
                }
            }
            try {
                const response = await fetch(option.url, op)
                const json = await response.json()
                setData(json)
            } catch (err) {
                setError(err)
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    React.useEffect(() => {
        setCount(Math.ceil(data.length / perPage))
        setCurrentData(data.slice((page - 1) * perPage, page * perPage))
        setIsLoading(false)
    }, [data])

    const handleChange = (e, p) => {
        setPage(p)
        setCurrentData(data.slice((p - 1) * perPage, p * perPage))
        //console.log(currentData)
    }

    if (isLoading) return <div>Loading...</div>

    return !isLoading && (data ?
        < div >
            <Stack direction='column'>
                <List>
                    {currentData.map((item, index) => {
                        const { rank, thumbnail, title, year, genre } = item
                        return <SearchItemUI
                            id={rank}
                            title={title}
                            image={{ id: thumbnail }}
                            titleType={genre}
                            year={year}
                        />
                    })}
                </List>
                <Pagination
                    count={count}
                    page={page}
                    onChange={handleChange}
                />
            </Stack>
        </div > :
        <div>{error}</div>
    )
}

export default Top100;
