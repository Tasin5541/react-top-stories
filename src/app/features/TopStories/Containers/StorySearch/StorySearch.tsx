import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState, useEffect } from "react";
import { filterStories, resetSearch } from "../../topStoriesSlice";
import { useAppDispatch } from "../../../../../hooks/useReduxHooks";
import { useLocation } from "react-router-dom";

function StorySearch() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [search, setSearch] = useState<string>("");

  //Search after timeout
  useEffect(() => {
    if (search === "" || !search) {
      dispatch(resetSearch());
    }
    const timeoutId = setTimeout(() => {
      if (search) {
        dispatch(filterStories(search));
      }
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [search]);

  useEffect(() => {
    setSearch("");
  }, [location.pathname]);

  return (
    <>
      <TextField
        sx={{ width: "100%", marginBottom: "25px" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        hiddenLabel
        placeholder="search..."
        id="filled-hidden-label-small"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}

export default StorySearch;
