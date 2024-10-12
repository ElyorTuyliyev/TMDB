import {
  Box,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { MouseEvent, useEffect, useState } from "react";
import { CinemaStyle } from "./Cinema.style";
import Card from "../../../../components/Card/card";

type Props = {};

const Cinemas = () => {
  const [movieList, setMovieList] = useState([]);
  const [trending, setTrending] = useState("day");

  const handleTrendingDayChange = (
    _: MouseEvent<HTMLElement>,
    value: string
  ) => {
    if (value !== null) {
      setTrending(value);
    }
  };

  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/${trending}?api_key=2101c54b76293d55849fe4ef85376cc5`
    )
      .then((response) => response.json())
      .then((response) => setMovieList(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovie();
  }, [trending]);

  return (
    <CinemaStyle>
      <Container maxWidth="lg">
        <Box className="cinema__title-wrapper">
          <Typography className="cinema__title" variant="h4">
            Trending {trending}
          </Typography>
          <Box className="cinema__btn-wrapper">
            <ToggleButtonGroup
              value={trending}
              color="primary"
              className="cinema__btn"
              exclusive
              aria-label="text-alignment"
              onChange={handleTrendingDayChange}
            >
              <ToggleButton className="cinema__btn" value="day">
                Today
              </ToggleButton>
              <ToggleButton className="cinema__btn" value="week">
                This Week
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>

        <Box className="cinemas__wrapper">
          {(movieList || [])?.map(
            ({ title, poster_path, vote_count, release_date }) => {
              return (
                <Card
                  title={title}
                  poster_path={poster_path}
                  vote_count={vote_count}
                  release_date={release_date}
                />
              );
            }
          )}
        </Box>
      </Container>
    </CinemaStyle>
  );
};

export default Cinemas;
