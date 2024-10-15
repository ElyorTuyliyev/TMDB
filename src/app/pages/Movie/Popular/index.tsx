import { Box } from "@mui/material";
import React from "react";
import Header from "../../../components/header";
import PopularMovieList from "./components/PopularMovieList";
import Footer from "../../../components/footer";

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
