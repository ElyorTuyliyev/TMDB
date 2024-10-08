import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

import HomeImg from "../../../assets/HomeImg.jpg";
import HomeImg2 from "../../../assets/tds.jpg";

import SearchIcon from "@mui/icons-material/Search";
import { HomeStyle } from "./home.style";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <HomeStyle>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${HomeImg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
        }}
      >
        <Container maxWidth="lg" sx={{ padding: "0px 24px !important" }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap={3}
            height="360px"
            sx={{}}
          >
            <Box>
              <Typography variant="h3">Welcome.</Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Millions of movies, TV shows and people discover. Explore now
              </Typography>
              <Box display="flex" gap="16px">
                <TextField
                  placeholder="Search for a movie, tv show, person"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "5px",
                      width: "620px",
                      height: "35px",
                      color: "black",
                      backgroundColor: "white",
                    },
                  }}
                />

                <Button
                  sx={{ color: "white", backgroundColor: "blue" }}
                  variant="outlined"
                  endIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </HomeStyle>
  );
};

export default HomePage;
