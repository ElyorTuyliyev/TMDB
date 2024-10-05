import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { HeaderStyle } from "./header.style";

import headerLogo from "./assets/tmdb__logo.png";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};

const Header = (props: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(3 37 65)",
        padding: "16px  0",
      }}
    >
      <Container maxWidth="lg">
        <HeaderStyle>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" gap={3}>
              <img className="header__logo" src={headerLogo} alt="tmdb-logo " />
              <Typography className="header__links">Movie</Typography>
              <Typography className="header__links">TV shows</Typography>
              <Typography className="header__links">People</Typography>
              <Typography className="header__links">More</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={3}>
              <AddIcon
                sx={{
                  color: "#fff",
                }}
              />

              <Typography className="header__links">EN</Typography>
              <Typography className="header__links">Login</Typography>
              <Typography className="header__links">Join TMDB</Typography>
              <SearchIcon
                sx={{
                  color: "#fff",
                }}
              />
            </Box>
          </Box>
        </HeaderStyle>
      </Container>
    </Box>
  );
};

export default Header;
