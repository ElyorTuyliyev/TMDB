import { PATHS } from "../constants/path";
import Home from "../pages/home";
import NowPlaying from "../pages/Movie/Now";
import Popular from "../pages/Movie/Popular";

export const ROUTES = [
  {
    element: <Home />,
    path: PATHS.HOME,
  },
  {
    element: <Popular />,
    path: PATHS.POPULAR,
  },
  {
    element: <NowPlaying />,
    path: PATHS.NowPlaying,
  },
];
