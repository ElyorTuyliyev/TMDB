import { Box } from "@mui/material";
import React from "react";
import Home from "../pages/home";
import Popular from "../pages/popular/popular";

type Props = {};

const Ui = (props: Props) => {
  return (
    <Box>
      <Home />
      {/* <Popular /> */}
    </Box>
  );
};

export default Ui;
