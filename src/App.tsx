import { Box } from "@mui/material";
import Ui from "./app/ui";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./app/routes";

function App() {
  return (
    <Routes>
      {ROUTES.map((item) => (
        <Route path={item.path} element={item.element} />
      ))}
    </Routes>
  );
}

export default App;
