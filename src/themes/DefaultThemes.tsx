import { createTheme } from "@mui/material/styles";
import { purple, grey, blueGrey } from "@mui/material/colors";

export const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: "#ffffff",
    },
  },
  components: {
    MuiTab: {
      defaultProps: {
        sx: {
          width: 60,
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        sx: {
          width: "100%",
        },
      },
    },
  },
});
