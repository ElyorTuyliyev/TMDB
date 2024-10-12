import { PATHS } from "../constants/path";
import Home from "../pages/home";
import Popular from "../pages/popular/popular";

export const ROUTES = [
  {
    element: <Home />,
    path: PATHS.HOME,
  },
  {
    element: <Popular />,
    path: PATHS.POPULAR,
  },
];
