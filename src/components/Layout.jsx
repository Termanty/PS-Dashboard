import React from "react";
import Header from "./Header";
import Main from "./Main";
import Leftbar from "./LeftBar/Leftbar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { Paper} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { darkTheme, lightTheme } from "./LeftBar/Leftbar.style";
import { toggleTheme } from "../store/theme/themeSlice";

function Layout({ children }) {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const ToggleSwitch = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "100px",
          right: "10px",
        }}
      >

      {theme.darkTheme}
      <IconButton sx={{ ml: 1 }} onClick={() => dispatch(toggleTheme())} color="inherit">
        {theme.darkTheme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <Paper
        style={{
          minHeight: "100vh",
          width:'100%',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ToggleSwitch />
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Leftbar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Main>{children}</Main>
      </Box>
    </Box>
    </Paper>
    </ThemeProvider>
  );
}

export default Layout;
