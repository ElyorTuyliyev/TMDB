import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PopularMovieList from "./components/popularMovieList/popularMovieList";

type Props = {};

const Popular = (props: Props) => {
  return (
    <Box>
      <Header />
      <PopularMovieList />
      <Footer />
    </Box>
  );
};

export default Popular;
