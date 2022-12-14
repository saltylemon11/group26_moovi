import React from "react";
import Pagination from "@mui/material/Pagination";
import { ItemList } from "./collection";
import ProfileSidebar from "./sidebarView";
import Stack from "@mui/material/Stack";

// for test
const catimg = { img: 'http://placekitten.com/g/200/200', title: 'My Cat from Hell', description: 'S2e3' }
const itemData = new Array(9).fill(catimg)

function InProgressMain(props) {
    return (
        <div>
            <ItemList listData={itemData} />
            <Pagination count={5} />
        </div>
    )
}

function InProgress(props){
    return (
        <div>
            <Stack direction='row' spacing={40}>
                <InProgressMain listData={itemData}/>
                <ProfileSidebar />
            </Stack>
        </div>
    )
}

export default InProgress