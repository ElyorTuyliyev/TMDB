import { Box, Button, Typography } from "@mui/material";
import React from "react";

type Props = {};

const MovieTrailer = (props: Props) => {
  return (
    <Box className="movie__trailer-wrapper">
      <Box className="movie__trailer-title-wrapper">
        <Typography>Latest Trailer </Typography>
        <Box>
          <Button variant="outlined">Popular</Button>
          <Button variant="outlined">In Theaters</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieTrailer;
