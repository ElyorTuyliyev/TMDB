import React from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Typography } from "@mui/material";
import { CardStyle } from "./Card.style";

type Props = {
  title: string;
  poster_path: string;
  vote_count: string;
  release_date: string;
};

const Card = ({ title, poster_path, vote_count, release_date }: Props) => {
  return (
    <CardStyle>
      <Box>
        <Box className="cinema__img-wrapper">
          <Box className="cinema__img-icon">
            <MoreHorizIcon />
          </Box>
          <img
            className="cinema__img"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="cinema-img"
          />
        </Box>
        <Box className="cinema__text-wrapper">
          <Box className="cinema__percentage-wrapper">
            <Typography className="cinema__percentage">{vote_count}</Typography>
          </Box>
          <Typography className="cinema__title">{title}</Typography>
          <Typography className="cinema__date">{release_date}</Typography>
        </Box>
      </Box>
    </CardStyle>
  );
};

export default Card;
