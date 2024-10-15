import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { Box } from "@mui/material";
import SortList from "../../../components/Sort-list/SortList";
import PopularMovieList from "../Popular/components/PopularMovieList";

type Props = {};

const NowPlaying = (props: Props) => {
  return (
    <Box>
      <Header />
      <Box display="flex">
        <PopularMovieList />
      </Box>
      <Footer />
    </Box>
  );
};

export default NowPlaying;
