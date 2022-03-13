import React, { useEffect, useState } from "react";
import SearchedMovie from "./SearchedMovie";
// import SearchedPerson from "./SearchedPerson";
import { genre, sortingWay } from "./data";
import SearchedTV from "./SearchedTV";
import {
  MenuItem,
  FormControl,
  Select,
  FormControlLabel,
  Checkbox,
  OutlinedInput,
  ListItemText,
  InputLabel,
} from "@mui/material";

function SearchFilter(props) {
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedGenreByID, setSelectedGenreByID] = useState([]);
  const [movieChecked, setMovieChecked] = useState(true);
  const [TVChecked, setTVChecked] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [sortMethod, setSortMethod] = useState("");

  useEffect(() => {
    setFilteredData(props.searchData);
  }, [props.searchData]);

  const handleGenreSelection = (event) => {
    setSelectedGenre(
      typeof event.target.value === "string"
        ? event.target.value.split(",")
        : event.target.value
    );

    genreIDFind();
  };

  const genreIDFind = () => {
    const temp = [];
    selectedGenre.map((sg) => {
      genre.map((g) => {
        if (sg === g.name) {
          temp.push(g.id);
        }
      });
    });
    setSelectedGenreByID(temp);

    generateFilteredData();
  };

  const generateFilteredData = () => {
    const temp = [];
    props.searchData.map((d) => {
      d.genre_ids.map((gi) => {
        selectedGenreByID.map((sgi) => {
          if (gi === sgi) {
            temp.push(d);
          }
        });
      });
    });

    setFilteredData(temp);
  };

  const handleSortMethod = (event) => {
    setSortMethod(event.target.value);

    const temp = [...filteredData];

    if (sortMethod === "Popularity Ascending") {
      temp.sort((a, b) => {
        return a.popularity - b.popularity;
      });
      setFilteredData(temp);
    } else if (sortMethod === "Popularity Descending") {
      temp.sort((a, b) => {
        return b.popularity - a.popularity;
      });
      setFilteredData(temp);
    }
  };

  const handleMovieCheck = (event) => {
    setMovieChecked(event.target.checked);
  };

  const handleTVCheck = (event) => {
    setTVChecked(event.target.checked);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 200,
      },
    },
  };

  return (
    <React.Fragment>
      <div className="filter-panel">
        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel id="demo-multiple-checkbox-label">Genre</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selectedGenre}
            onChange={handleGenreSelection}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {genre.map((g) => {
              return (
                <MenuItem key={g.id} value={g.name}>
                  <Checkbox checked={selectedGenre.indexOf(g.name) > -1} />
                  <ListItemText primary={g.name} />
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={sortMethod}
            label="Sort"
            onChange={handleSortMethod}
          >
            {sortingWay.map((sw) => {
              return (
                <MenuItem key={sw} value={sw}>
                  {sw}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox checked={movieChecked} onChange={handleMovieCheck} />
          }
          label="Movies"
        />
        <FormControlLabel
          control={<Checkbox checked={TVChecked} onChange={handleTVCheck} />}
          label="TV Shows"
        />
      </div>

      {/* <SearchedPerson searchData={searchData} /> */}
      {movieChecked && (
        <SearchedMovie searchData={filteredData} sort={sortMethod} />
      )}
      {TVChecked && <SearchedTV searchData={filteredData} sort={sortMethod} />}
    </React.Fragment>
  );
}

export default SearchFilter;
