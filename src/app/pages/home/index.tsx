import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/header";
import HomePage from "./components/home";
import Cinemas from "./components/cinema";
import MovieTrailer from "./components/movie-latest-trailers";
import Popular from "./components/Popular";

const Home = () => {
  return (
    <Box>
      <Header />
      <HomePage />
      <Cinemas />
      <MovieTrailer />
      <Popular />
    </Box>
  );
};

export default Home;
