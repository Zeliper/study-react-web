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
    MuiButton: {
      defaultProps: {
        sx: {
          paddingLeft: "20px",
          paddingTop: "30px",
          paddingRight: "20px",
          paddingBottom: "15px",
        },
      },
    },
    // MuiTextField: {
    //   defaultProps: {
    //     sx: {
    //       height: "15px",
    //     },
    //   },
    // },
    // MuiInputBase: {
    //   defaultProps: {
    //     sx: {
    //       height: "30px",
    //     },
    //   },
    // },
    // MuiFormControl: {
    //   defaultProps: {
    //     sx: {
    //       height: "30px",
    //     },
    //   },
    // },
    // MuiFormLabel: {
    //   defaultProps: {
    //     sx: {
    //       height: "30px",
    //       fontSize: "12px",
    //       paddingBottom: "12px",
    //     },
    //   },
    // },
  },
});
