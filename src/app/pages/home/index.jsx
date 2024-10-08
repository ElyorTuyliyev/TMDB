import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/header";
import HomePage from "./components/home";
import Cinemas from "./components/cinema";

const Home = () => {
  return (
    <Box>
      <Header />
      <HomePage />
      <Cinemas />
      <MovieTrailer />
    </Box>
  );
};

export default Home;
