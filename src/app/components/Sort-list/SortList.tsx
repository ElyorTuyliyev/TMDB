import React, { useState } from "react";
import SortStyle from "./Sort.style";
import {
  Box,
  Chip,
  Radio,
  Button,
  Select,
  MenuItem,
  Accordion,
  FormLabel,
  Typography,
  RadioGroup,
  FormControl,
  AccordionDetails,
  FormControlLabel,
  AccordionSummary,
  SelectChangeEvent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker } from "@mui/x-date-pickers";
import { MOVIE_GENRES } from "./constants";

type Props = {};

const SortList = (props: Props) => {
  const [sort, setSort] = useState("PopularityAscending");

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  const handleBtn = (title: string) => {
    let arr = selectedGenres;
    if (arr.includes(title)) {
      setSelectedGenres((prev) => prev.filter((item) => item !== title));
    } else {
      setSelectedGenres((prev) => [...prev, title]);
    }

    console.log(selectedGenres);
  };

  return (
    <SortStyle>
      <Box display="flex" gap={2} flexDirection="column">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="sort__panel"
            id="sort__panel"
          >
            Sort
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "14px",
              }}
              className="sort__panel-title"
            >
              Sort Results By
            </Typography>
            <FormControl fullWidth>
              <Select
                className="sort__select"
                value={sort}
                onChange={handleChange}
              >
                <MenuItem value={"PopularityDescending"}>
                  Popularity Descending
                </MenuItem>
                <MenuItem value={"PopularityAscending"}>
                  Popularity Ascending
                </MenuItem>
                <MenuItem value={"RatingDescending"}>
                  Rating Descending
                </MenuItem>
                <MenuItem value={"ReleaseDateDescending"}>
                  Release Date Descending
                </MenuItem>
                <MenuItem value={"Release Date Ascending"}>
                  Release Date Ascending
                </MenuItem>
                <MenuItem value={"A-Z"}> Title (A-Z)</MenuItem>
                <MenuItem value={"Z-A"}> Title (Z-A)</MenuItem>
              </Select>
            </FormControl>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="sort__panel"
            id="sort__panel"
          >
            Filters
          </AccordionSummary>
          <AccordionDetails>
            <FormControl>
              <FormLabel id="sort__show-me">Show Me</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value={"Everything"}
                  label="Everything"
                  control={<Radio />}
                ></FormControlLabel>
                <FormControlLabel
                  value="movieSeen"
                  label="Movies I Haven't Seen"
                  control={<Radio />}
                ></FormControlLabel>
                <FormControlLabel
                  value="movieSeen1"
                  label="Movies I Have Seen"
                  control={<Radio />}
                ></FormControlLabel>
              </RadioGroup>
              <Box display="flex" flexDirection="column" gap={2}>
                <DatePicker label="From" />
                <DatePicker label="To" />
              </Box>

              <Box>
                <Typography>Genres</Typography>
              </Box>
              <Box display="flex" flexDirection="row" gap={1} flexWrap="wrap">
                {MOVIE_GENRES.map((title) => (
                  <Chip
                    className="sort__genres-btn"
                    variant="filled"
                    label={title}
                    onClick={() => handleBtn(title)}
                  />
                ))}
              </Box>
              <Typography sx={{}}>Certification</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
        <Button variant="contained">search</Button>
      </Box>
    </SortStyle>
  );
};

export default SortList;
