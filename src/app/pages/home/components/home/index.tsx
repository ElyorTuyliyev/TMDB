import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

import HomeImg from "../../../assets/HomeImg.jpg";
import HomeImg2 from "../../../assets/tds.jpg";

import SearchIcon from "@mui/icons-material/Search";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box
          pt={7}
          display="flex"
          flexDirection="column"
          gap={3}
          sx={{
            position: "static",
            zIndex: "999",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
            }}
            variant="h3"
          >
            Welcome.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Millions of movies, TV shows and people discover. Explore now
          </Typography>
          <Box display="flex" justifyContent="center">
            <TextField
              placeholder="Search for a movie, tv show, person"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                  width: "500px",
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
              Serch
            </Button>
          </Box>
        </Box>
        <img
          style={{
            width: "100%",
            height: "91vh",
            position: "absolute",
            left: "0",
            top: "0",
            zIndex: "-1",
          }}
          src={HomeImg2}
          alt="home-img"
        />
      </Container>
    </Box>
  );
};

export default HomePage;
