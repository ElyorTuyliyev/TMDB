import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PopularMovieListStyle } from "./Popular.style";
import Card from "../../../../components/Card/card";
import SortList from "../../../../components/Sort-list/SortList";

const PopularMovieList = () => {
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

    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => setMovieList(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovie();
  }, [movieList]);
  return (
    <PopularMovieListStyle>
      <Container>
        <Typography className="popular__movie-list-title" variant="h5">
          Popular Movies
        </Typography>
        <Box className="popular__wrapper">
          <Box className="popular__sort-wrapper">
            <SortList />
          </Box>
          <Box width="100%">
            <Box className="popular__movie-list-wrapper">
              {movieList.map(
                ({ title, poster_path, vote_count, release_date }) => (
                  <Card
                    title={title}
                    poster_path={poster_path}
                    vote_count={vote_count}
                    release_date={release_date}
                  />
                )
              )}
            </Box>
            <Button
              className="popular__movie-list-btn"
              variant="contained"
              fullWidth
            >
              Load more
            </Button>
          </Box>
        </Box>
      </Container>
    </PopularMovieListStyle>
  );
};

export default PopularMovieList;
