import {
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import { HeaderStyle } from "./header.style";
import headerLogo from "./assets/tmdb__logo.png";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/path";

type Props = {};

const Header = (props: Props) => {
  const [movieAnchorEl, setMovieAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const movieOpen = Boolean(movieAnchorEl);
  const handleMovieClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMovieAnchorEl(event.currentTarget);
  };
  const handleMovieClose = () => {
    setMovieAnchorEl(null);
  };

  const [tvAnchorEl, setTvAnchorEl] = React.useState<null | HTMLElement>(null);
  const tvOpen = Boolean(tvAnchorEl);
  const handleTvClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTvAnchorEl(event.currentTarget);
  };
  const handleTvClose = () => {
    setTvAnchorEl(null);
  };

  const [peopleAnchorEl, setPeopleAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const peopleOpen = Boolean(peopleAnchorEl);
  const handlePeopleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPeopleAnchorEl(event.currentTarget);
  };
  const handlePeopleClose = () => {
    setPeopleAnchorEl(null);
  };

  const [moreAnchorEl, setMoreAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const moreOpen = Boolean(moreAnchorEl);
  const handleMoreClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMoreAnchorEl(event.currentTarget);
  };
  const handleMoreClose = () => {
    setMoreAnchorEl(null);
  };

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
              <Link to={PATHS.HOME}>
                <img
                  className="header__logo"
                  src={headerLogo}
                  alt="tmdb-logo "
                />
              </Link>

              <Button
                id="movie-button"
                aria-controls={movieOpen ? "movie-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={movieOpen ? "true" : undefined}
                onClick={handleMovieClick}
                className="header__links"
              >
                Movie
              </Button>
              <Menu
                id="movie-menu"
                anchorEl={movieAnchorEl}
                open={movieOpen}
                onClose={handleMovieClose}
                MenuListProps={{
                  "aria-labelledby": "movie-button",
                }}
              >
                <MenuItem onClick={handleMovieClose}>
                  <Link to={PATHS.POPULAR}>Popular</Link>
                </MenuItem>
                <MenuItem onClick={handleMovieClose}>Now Playing</MenuItem>
                <MenuItem onClick={handleMovieClose}>Upcoming</MenuItem>
                <MenuItem onClick={handleMovieClose}>Top Rated</MenuItem>
              </Menu>

              <Button
                id="tv-button"
                aria-controls={tvOpen ? "tv-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={tvOpen ? "true" : undefined}
                onClick={handleTvClick}
                className="header__links"
              >
                TV shows
              </Button>
              <Menu
                id="tv-menu"
                anchorEl={tvAnchorEl}
                open={tvOpen}
                onClose={handleTvClose}
                MenuListProps={{
                  "aria-labelledby": "tv-button",
                }}
              >
                <MenuItem onClick={handleTvClose}>Popular</MenuItem>
                <MenuItem onClick={handleTvClose}>Airing Today</MenuItem>
                <MenuItem onClick={handleTvClose}>On TV</MenuItem>
                <MenuItem onClick={handleTvClose}>Top Rated</MenuItem>
              </Menu>

              <Button
                id="people-btn"
                aria-controls={peopleOpen ? "people-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={peopleOpen ? "true" : undefined}
                onClick={handlePeopleClick}
                className="header__links"
              >
                People
              </Button>

              <Menu
                id="people-menu"
                anchorEl={peopleAnchorEl}
                open={peopleOpen}
                onClose={handlePeopleClose}
                MenuListProps={{
                  "aria-labelledby": "people-button",
                }}
              >
                <MenuItem onClick={handlePeopleClose}>Popular People</MenuItem>
              </Menu>
              <Button
                id="more-list"
                aria-controls={moreOpen ? "people-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={moreOpen ? "true" : undefined}
                onClick={handleMoreClick}
                className="header__links"
              >
                More
              </Button>
              <Menu
                id="more-menu"
                anchorEl={moreAnchorEl}
                open={moreOpen}
                onClose={handleMoreClose}
                MenuListProps={{
                  "aria-labelledby": "More-button",
                }}
              >
                <MenuItem onClick={handleMoreClose}>Discussions</MenuItem>
                <MenuItem onClick={handleMoreClose}>Leaderboard</MenuItem>
                <MenuItem onClick={handleMoreClose}>Support</MenuItem>
                <MenuItem onClick={handleMoreClose}>API</MenuItem>
              </Menu>
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
