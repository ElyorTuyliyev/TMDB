import {
  Box,
  Button,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
import TrailerStyle from "./trailers.style";

type Props = {};

const MovieTrailer = (props: Props) => {
  return (
    <Container maxWidth="lg">
      <TrailerStyle>
        <Box className="movie__trailer-wrapper">
          <Box className="movie__trailer-title-wrapper">
            <Typography variant="h4">Latest Trailer </Typography>
            <Box>
              <ToggleButtonGroup
                className="cinema__btn"
                exclusive
                aria-label="text-alignment"
              >
                <ToggleButton value="center">Popular</ToggleButton>
                <ToggleButton value="center">In Theaters</ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Box>
        </Box>
        <Box className="movie__trailer-link-box">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rZveIhEMDa0"
            title="Mr Bean hitchiking - Mr Bean&#39;s Holiday"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hY6aF9B4hKY"
            title="Prison Break | Mechanic Resurrection | Prime Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Box>
      </TrailerStyle>
    </Container>
  );
};

export default MovieTrailer;
