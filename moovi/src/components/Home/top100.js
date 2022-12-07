/* Use API: https://rapidapi.com/rapihub-rapihub-default/api/imdb-top-100-movies/ */
import React from "react";
import { ItemList } from "../Profile/collection";
import Pagination from "@mui/material/Pagination";
import { getIMDB100 } from "../../API/utils";
import { Stack } from "@mui/material";

function Top100() {
    const [data, setData] = React.useState({})

    React.useEffect(() => {
        const fetchData = () => {
            const result = getIMDB100()
            setData(result)
        }
        fetchData()
    }, [])

    //console.log(data)

    return (<div>
                <Stack direction='column'>
                    <div>Header</div>
                    <div>{data.results}</div>
                    <Pagination count={3} />
                </Stack>
            </div>
            )

}

export default Top100