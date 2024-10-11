import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected, &.Mui-selected:hover": {
            color: "white",
            backgroundColor: colors.blue[500],
          },
        },
      },
    },
  },
});
