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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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

  return (
    <div>
      <Box sx={{ Width: 100, height: 100, bgcolor: "background.paper" }}>
        <ThemeProvider theme={DefaultTheme}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Icon" sx={{ width: 1000 }} />
            <Tab label="Q&A" />
            <Tab label="지식" />
            <Tab label="커뮤니티" />
            <Tab label="이벤트" />
            <Tab label="JOBS" />
            <Tab label="공지사항" />
          </Tabs>
        </ThemeProvider>
      </Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
