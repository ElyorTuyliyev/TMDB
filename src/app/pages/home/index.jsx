import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/header";
import HomePage from "./components/home";
import Cinemas from "./components/cinema";

type Props = {};

const Home = (props: Props) => {
  return (
    <Box>
      <Header />
      <HomePage />
      <Cinemas />
    </Box>
  );
};

export default Home;
