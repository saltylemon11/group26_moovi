import React from "react";
import Pagination from "@mui/material/Pagination";
import { ItemList } from "./collection";
import ProfileSidebar from "./sidebarView";
import Stack from "@mui/material/Stack";

// for test
const catimg = {
  img: "http://placekitten.com/g/200/200",
  title: "Soft Kitties",
  description: "A movie for cat lovers.",
  date: "2022-12-02",
  myrate: "0.0",
};
const itemData = new Array(9).fill(catimg);

function ToWatchMain(props) {
  return (
    <div>
      <ItemList listData={itemData} />
      <Pagination count={5} />
    </div>
  );
}

function ToWatch(props) {
  return (
    <div>
      <Stack direction="row" spacing={40}>
        <ToWatchMain listData={itemData} />
        <ProfileSidebar />
      </Stack>
    </div>
  );
}

export default ToWatch;
