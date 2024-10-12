import React from "react";
import FooterStyle from "./footerStyle";
import { Box, Container, Typography } from "@mui/material";

import FooterLogo from "./assets/tmdbLogoFooter.jpg";
type Props = {};

const Footer = (props: Props) => {
  return (
    <FooterStyle>
      <Box className="footer">
        <Container maxWidth="lg">
          <Box className="footer__wrapper">
            <Box className="footer__logo-box">
              <img src={FooterLogo} alt="footer__logo" />
            </Box>
            <Box className="footer__list-wrapper">
              <Box className="footer__link-list-wrapper">
                <Typography className="footer__list-link" variant="h5">
                  The Basics
                </Typography>
                <Typography className="footer__list-link">
                  About TMDB
                </Typography>
                <Typography className="footer__list-link">
                  Contact Us
                </Typography>
                <Typography className="footer__list-link">
                  Support Forums
                </Typography>
                <Typography className="footer__list-link">API</Typography>
                <Typography className="footer__list-link">
                  System Status
                </Typography>
              </Box>
              <Box className="footer__link-list-wrapper">
                <Typography className="footer__list-link" variant="h5">
                  Get Involved
                </Typography>
                <Typography className="footer__list-link">
                  Contribution Bible
                </Typography>
                <Typography className="footer__list-link">
                  Add New Movie
                </Typography>
                <Typography className="footer__list-link">
                  Add New TV Show
                </Typography>
              </Box>
              <Box className="footer__link-list-wrapper">
                <Typography className="footer__list-link" variant="h5">
                  Community
                </Typography>
                <Typography className="footer__list-link">
                  Guidelines
                </Typography>
                <Typography className="footer__list-link">
                  Discussions
                </Typography>
                <Typography className="footer__list-link">
                  Leaderboard
                </Typography>
              </Box>
              <Box className="footer__link-list-wrapper">
                <Typography className="footer__list-link" variant="h5">
                  Legal
                </Typography>
                <Typography className="footer__list-link">
                  Terms of Use
                </Typography>
                <Typography className="footer__list-link">
                  API Terms of Use
                </Typography>
                <Typography className="footer__list-link">
                  Privacy Policy
                </Typography>
                <Typography className="footer__list-link">
                  DMCA Policy
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </FooterStyle>
  );
};

export default Footer;
