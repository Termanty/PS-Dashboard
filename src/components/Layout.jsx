import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Main from "./Main";
import Leftbar from "./LeftBar/Leftbar";
import { darkTheme, lightTheme } from "./LeftBar/Leftbar.style";

function Layout({ children }) {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
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
    </ThemeProvider>
  );
}

export default Layout;
