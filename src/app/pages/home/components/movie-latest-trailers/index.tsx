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
            <Typography>Latest Trailer </Typography>
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
            src="https://www.youtube.com/embed/moMbpOfFOIY?si=Gjctkd1SLPDq6zq-"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/moMbpOfFOIY?si=Gjctkd1SLPDq6zq-"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Box>
      </TrailerStyle>
    </Container>
  );
};

export default MovieTrailer;
