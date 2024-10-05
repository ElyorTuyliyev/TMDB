import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/header";
import HomePage from "./components/home";

type Props = {};

const Home = (props: Props) => {
  return (
    <Box>
      <Header />
      <HomePage />
    </Box>
  );
};

export default Home;
