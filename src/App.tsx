import { Language, MenuBook } from "@mui/icons-material";
import {
  Alert,
  AppBar,
  Button,
  Collapse,
  Grid,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  SvgIcon,
  SwipeableDrawer,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Outlet,
  Routes,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import { DefaultTheme } from "./themes/DefaultThemes";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { alpha, Stack } from "@mui/system";
import LogoIcon from "./assets/logo.svg";
import { Container } from "react-dom";

function App() {
  const [value, setValue] = React.useState(0);
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // const { state } = useLocation();
  // console.log(state);
  return (
    <div>
      <Box sx={{ bgcolor: "background.paper" }}>
        <ThemeProvider theme={DefaultTheme}>
          <Grid container spacing={2}>
            {/* <SvgIcon component={LogoIcon} inheritViewBox/> */}

            <Button>
              <img src="img/logo.svg" />
            </Button>
            <Box sx={{ width: 65 }} />
            <Button>Q&A</Button>
            <Button>지식</Button>
            <Button>커뮤니티</Button>
            <Button>이벤트</Button>
            <Button>JOBS</Button>
            <Button>공지사항</Button>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingTop: "15px",
                "& > :not(style)": { m: 1 },
              }}
            >
              <TextField
                id="demo-helper-text-misaligned-no-helper"
                label="Search"
                size="small"
                inputProps={{ maxLength: 12 }}
              />
            </Box>
          </Grid>
        </ThemeProvider>
      </Box>
    </div>
  );
}

export default App;
