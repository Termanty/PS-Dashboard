import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NotificationBell from "./Notification/NotificationBell";
import { toggleTheme } from "../store/theme/themeSlice";

function Header() {
  const user = useSelector((state) => state.user);
  const drawerWidth = 260;
  const location = useLocation();
  const locationPath = location.pathname;

  const ToggleSwitch = () => {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    return (
        <Box sx={{ marginLeft:"50%", marginTop:-5}}>
          <Stack direction="row" spacing={1} alignItems="center">
            <FormControlLabel
          control={
            <Switch
              onChange={() => dispatch(toggleTheme())}
              aria-label="login switch"
            />
          }
          label={theme.darkTheme ? 'ligh' : 'dark'}
        />
          </Stack>
      </Box>
    );
   
  };
  
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        height: "92px",
        // backgroundColor: "white",
        border:" 1px solid #F3F6F9",
        // zIndex: 1100,
      }}
    >
      <Toolbar sx={{ marginTop: 2 }}>
        {locationPath === "/MySurveys" && (
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="black"
              position="relative"
              marginRight="50"
            >
              My Surveys
            </Typography>
          </Toolbar>
        )}
        <ToggleSwitch />
        <Grid container justifyContent="flex-end">
          <NotificationBell badgeContent={4} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            marginLeft="20px"
          >
            Logged as {user.name}
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>

  );
}

export default Header;
