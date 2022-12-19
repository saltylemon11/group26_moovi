import React from "react";
import Pagination from "@mui/material/Pagination";
import RecordItemUI from "../../shared/recordItemUI";
import ProfileSidebar from "./sidebarView";
import { List, Stack } from "@mui/material";

function MovieListUI(props) {
    const { status, data } = props
    // pagination
    const [page, setPage] = React.useState(1)
    const [count, setCount] = React.useState()
    const [currentData, setCurrentData] = React.useState([])
    const perPage = 10

    const itemData = data.map(i => {
        return {
            movieId: i.movieId,
            img: i.thumbnail,
            title: i.title,
            comment: i.comment,
            date: i.date,
            rating: i.rating,
            isPrivate: i.isPrivate
        }
    })

    React.useEffect(() => {
        setCount(Math.ceil(data.length / perPage))
        setCurrentData(itemData.slice((page - 1) * perPage, page * perPage))
    }, [])


    const handleChange = (e, p) => {
        setPage(p)
        setCurrentData(itemData.slice((p - 1) * perPage, p * perPage))
    }

    return (
        <div>
            <Stack direction='row' spacing={40}>
                <List>
                    {currentData.map((i) => {
                        return <RecordItemUI
                            key={i.title}
                            movieId={i.movieId}
                            img={i.img}
                            status={status}
                            title={i.title}
                            comment={i.comment}
                            date={i.date}
                            rating={i.rating}
                            isPrivate={i.isPrivate}
                        />
                    })}
                </List>
                {/* <ProfileSidebar /> */}
            </Stack>
            <Pagination
                count={count}
                page={page}
                onChange={handleChange}
            />
        </div>
    )
}

export default MovieListUI