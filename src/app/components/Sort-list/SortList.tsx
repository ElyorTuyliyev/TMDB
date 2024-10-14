import React, { useState } from "react";
import SortStyle from "./Sort.style";
import {
  Box,
  Select,
  MenuItem,
  Accordion,
  Typography,
  FormControl,
  AccordionSummary,
  AccordionDetails,
  SelectChangeEvent,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LocalizationProvider } from "@mui/x-date-pickers";

type Props = {};

const SortList = (props: Props) => {
  const [sort, setSort] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
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
                defaultValue="PopularityDescending"
                className="sort__select"
                value={sort}
                onChange={handleChange}
              >
                <MenuItem value={4}>Popularity Descending</MenuItem>
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
              <LocalizationProvider></LocalizationProvider>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </Box>
    </SortStyle>
  );
};

export default SortList;
