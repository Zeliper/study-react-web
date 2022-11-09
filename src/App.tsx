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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
