import React from "react";
import Pagination from "@mui/material/Pagination";
import { ItemList } from "./collection";
import ProfileSidebar from "./sidebarView";
import Stack from "@mui/material/Stack";

// for test
const catimg = {
  img: "http://placekitten.com/g/200/200",
  title: "My Fluffy Friends",
  description: "Lots of fluffy cats. Love it.",
  date: "2022-12-02",
  myrate: "5.0",
};
const itemData = new Array(9).fill(catimg);

function WatchedMain(props) {
  return (
    <div>
      <ItemList listData={itemData} />
      <Pagination count={5} />
    </div>
  );
}

function Watched(props) {
  return (
    <div>
      <Stack direction="row" spacing={40}>
        <WatchedMain listData={itemData} />
        <ProfileSidebar />
      </Stack>
    </div>
  );
}

export default Watched;
