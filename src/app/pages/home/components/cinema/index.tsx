import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { CinemaStyle } from "./Cinema.style";
import CINEMAS__LIST from "./constants";

const Cinemas = () => {
  return (
    <CinemaStyle>
      <Container maxWidth="lg">
        <Box className="cinema__title-wrapper">
          <Typography className="cinema__title" variant="h4">
            Trending
          </Typography>
          <Box className="cinema__btn-wrapper">
            <Button className="cinema__btn" variant="outlined">
              Today
            </Button>
            <Button className="cinema__btn" variant="outlined">
              This week
            </Button>
          </Box>
        </Box>

        <Box className="cinemas__wrapper">
          {CINEMAS__LIST.map(({ title, data, icon, img, percentage }, i) => {
            return (
              <Box>
                <Box className="cinema__img-wrapper">
                  <Box className="cinema__img-icon">{icon}</Box>
                  <img className="cinema__img" src={img} alt="cinema-img" />
                </Box>
                <Box className="cinema__text-wrapper">
                  <Box className="cinema__percentage-wrapper">
                    <Typography className="cinema__percentage">
                      {percentage}
                    </Typography>
                  </Box>
                  <Typography className="cinema__title">{title}</Typography>
                  <Typography className="cinema__date">{data}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </CinemaStyle>
  );
};

export default Cinemas;
