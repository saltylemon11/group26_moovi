/* Use API: https://rapidapi.com/rapihub-rapihub-default/api/imdb-top-100-movies/ */
import React from "react";
import { ItemList } from "../Profile/collection";
import Pagination from "@mui/material/Pagination";
import { getIMDB100 } from "../../API/utils";
import { Stack } from "@mui/material";
import resolvePromise from "../../API/resolvePromise";
import promiseNoData from "../../API/promiseNoData";

function Top100() {
    const [promiseState] = React.useState({})
    const [, reRender] = React.useState()

    function notify() {
        reRender(new Object())
    }

    function onStart() {
        if (!promiseState.promise) {
            resolvePromise(getIMDB100(), promiseState, notify)
        }
        return 
    }

    function renderPage() {
        const data = promiseState.data
        return (
            <div>
                <Stack direction='column'>
                    <div>Header</div>
                    <ItemList listData={data} />
                    <Pagination count={3} />
                </Stack>
            </div>
        )
    }

    //console.log(data)

    return (<div>{
        onStart()
    } {
            promiseNoData(promiseState) || renderPage()

        }</div>)

}

export default Top100