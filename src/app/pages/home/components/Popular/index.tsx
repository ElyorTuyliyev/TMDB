import {
  Box,
  Button,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CinemaStyle } from "../cinema/Cinema.style";
import { log } from "console";

type Props = {
  title: string;
  poster_path: string;
  vote_count: string;
  release_date: string;
};
const Popular = () => {
  const [movieList, setMovieList] = useState([]);
  const getMovie = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTAxYzU0Yjc2MjkzZDU1ODQ5ZmU0ZWY4NTM3NmNjNSIsIm5iZiI6MTcyODM3OTY0My43MDk3NDksInN1YiI6IjY2NjA1MThiYTA2NDNiMjUwNzdkOGFkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YcuCuaMKxP0Ogq_ZT5fA7lu5uymJB3cqtoDl5V-X3-I",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${Math.floor(
        Math.random() * 9
      )}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovieList(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovie();
  }, []);

  const [alignment, setAlignment] = React.useState("left");

  return (
    <CinemaStyle>
      <Container maxWidth="lg">
        <Box className="cinema__title-wrapper">
          <Typography className="cinema__title" variant="h4">
            What's Popular
          </Typography>
          <Box className="cinema__btn-wrapper">
            <ToggleButtonGroup
              className="cinema__btn"
              exclusive
              value={alignment}
              aria-label="text-alignment"
            >
              <ToggleButton value="center">Popular</ToggleButton>
              <ToggleButton value="center">In Theaters</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>

        <Box className="cinemas__wrapper">
          {movieList.map(
            ({ title, poster_path, vote_count, release_date }: Props) => {
              return (
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
                      <Typography className="cinema__percentage">
                        {vote_count}
                      </Typography>
                    </Box>
                    <Typography className="cinema__title">{title}</Typography>
                    <Typography className="cinema__date">
                      {release_date}
                    </Typography>
                  </Box>
                </Box>
              );
            }
          )}
        </Box>
      </Container>
    </CinemaStyle>
  );
};

export default Popular;
