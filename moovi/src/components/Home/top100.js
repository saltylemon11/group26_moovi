/* Use API: https://rapidapi.com/rapihub-rapihub-default/api/imdb-top-100-movies/ */
import React from "react";
import Pagination from "@mui/material/Pagination";
import { optionsIMDB100 } from "../../services/apiConfig";
import { Stack, Container, Box, Divider } from "@mui/material";
import { List } from '@mui/material'
import { SearchItemUI } from "../../shared/searchItemUI";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

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

    if (!data) return (
        <div>
            <Backdrop open={true}><Box><CircularProgress color='inherit' /></Box></Backdrop>
        </div>
    )

    //return !isLoading && (data ?
    return (
        < div >
            <Container maxWidth="lg" >
                <Box>
                    <Stack direction='column'
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={5}>
                        <List>
                            <div>
                                <Backdrop open={!isLoading} timeout={{ exit: 50 }}><Box><CircularProgress color='inherit' /></Box></Backdrop>
                            </div>
                            {currentData.map((item, index) => {
                                const { imdbid, image, title, year, genre } = item
                                if(!isLoading) setIsLoading(!isLoading)
                                return (
                                    <div>
                                        <SearchItemUI
                                            id={'/tt/' + imdbid + '/'}
                                            title={title}
                                            image={{ url: image }}
                                            titleType={genre}
                                            year={year}
                                        />
                                        <Divider />
                                    </div>
                                )
                            })}
                        </List>
                        <Pagination
                            count={count}
                            page={page}
                            onChange={handleChange}
                        />
                    </Stack>
                </Box>
            </Container>
        </div > 
        //:
        //<div>{error}</div>
    )
}

export default Top100