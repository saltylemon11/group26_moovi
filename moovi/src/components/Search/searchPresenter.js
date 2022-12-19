import React from "react";
import { optionsIMDb } from "../../services/apiConfig";
//import SearchView from "./searchView";
//
import { Pagination } from "@mui/material";
import { Stack } from "@mui/material";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { SearchItemUI } from "../../shared/searchItemUI";
import "../../App.css";

function Search(props) {
  //const { q } = props
  //const [query, setQuery] = React.useState(q)
  const [q, setQ] = React.useState("");
  const [query, setQuery] = React.useState({ q: "cat" });
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  // pagination
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState();
  const [currentData, setCurrentData] = React.useState([]);

  const option = optionsIMDb;
  const perPage = 10;

  React.useEffect(() => {
    const fetchData = async () => {
      const op = {
        method: option.method,
        headers: {
          "X-RapidAPI-Key": option.apiKey,
          "X-RapidAPI-Host": option.apiHost,
        },
      };
      const params = new URLSearchParams(query);
      try {
        const response = await fetch(option.url + params, op);
        const json = await response.json();
        setData(json.results.filter((i) => i.name === undefined));
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  React.useEffect(() => {
    console.log(data);
    setCount(Math.ceil(data.length / perPage));
    setCurrentData(data.slice((page - 1) * perPage, page * perPage));
  }, [data]);

  const handleChange = (e, p) => {
    setPage(p);
    setCurrentData(data.slice((p - 1) * perPage, p * perPage));
  };

  const handleQueryChange = (e) => {
    setQ(e.target.value);
  };

  const handleClick = (e) => {
    setQuery({
      q: q,
    });
  };
  /*
    return !isLoading && (data
        ? <SearchView
            setQuery={setQuery.bind(this, query)}
            data={data}
            count={count}
            page={page}
            setPage={setPage}
            currentData={currentData}
            setCurrentData={setCurrentData}
        />
        : <div>{error}</div>)
    */

  return (
    <div className="blur-background">
      <Stack direction="column">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search movies"
            inputProps={{ "aria-label": "search movies" }}
            onChange={handleQueryChange}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleClick}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <List>
          {currentData.map((item, index) => {
            const { id, image, title, titleType, year } = item;
            return (
              <SearchItemUI
                id={id}
                image={image}
                title={title}
                titleType={titleType}
                year={year}
              />
            );
          })}
        </List>
        <Pagination count={count} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
}

export default Search;
