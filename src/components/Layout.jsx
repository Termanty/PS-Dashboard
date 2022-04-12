import React from "react";
import Header from "./Header";
import Main from "./Main";
import Leftbar from "./LeftBar/Leftbar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

function Layout({ children }) {
  return (
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
  );
}

export default Layout;
