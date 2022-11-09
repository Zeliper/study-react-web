import { Language, MenuBook } from "@mui/icons-material";
import {
  Alert,
  AppBar,
  Collapse,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Link, Outlet, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { DefaultTheme } from "./themes/DefaultThemes";

function App() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <ThemeProvider theme={DefaultTheme}>
        <AppBar position="static" color="primary">
          <Toolbar variant="dense">
            <Grid container>
              <Typography variant="h6" color="inherit" component="div">
                Study-React-Web
              </Typography>
            </Grid>
            <Grid container direction="row" justifyContent="flex-end">
              <IconButton
                color="secondary"
                sx={{}}
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <MenuBook></MenuBook>
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    handleClose;
                  }}
                >
                  Test11
                </MenuItem>
                <MenuItem onClick={handleClose}>Test2</MenuItem>
              </Menu>
            </Grid>
          </Toolbar>
        </AppBar>
        <Collapse in={!clicked}>
          <Alert onClose={() => setClicked(true)}>상단 알림창 테스트</Alert>
        </Collapse>
      </ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
