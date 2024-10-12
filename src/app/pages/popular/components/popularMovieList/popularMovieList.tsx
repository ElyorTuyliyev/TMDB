import { Box, Container, Typography } from "@mui/material";
import React from "react";

type Props = {};

const PopularMovieList = (props: Props) => {
  return (
    <Container>
      <Typography className="popular__movie-list-title" variant="h5">
        Popular Movies
      </Typography>

      <Box></Box>
      <Box></Box>
    </Container>
  );
};

export default PopularMovieList;
