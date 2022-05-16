import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Box,
  FormControlLabel,
  Grid,
  Switch,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import NotificationBell from "./Notification/NotificationBell";
import { toggleTheme } from "../store/theme/themeSlice";

function Header() {
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);
  const drawerWidth = 260;
  const location = useLocation();
  const locationPath = location.pathname;

  const colorToggle= (theme) =>{
    return theme.darkTheme ? "black" : "white"
  }

  const ToggleSwitch = () => {
    const dispatch = useDispatch();
    return (
      <Box>
        <Stack alignItems="center">
          <FormControlLabel
            control={
              <Switch
                onChange={() => dispatch(toggleTheme())}
                aria-label="login switch"
                defaultChecked={theme.darkTheme ? false : true}
                color="default"
              />
            }
            label={theme.darkTheme ? <p style={{color: "white"}}>light</p> : "dark"}
          />
        </Stack>
      </Box>
    );
  };

  return (
    <AppBar
      position="fixed"
      backgroundColor= "white"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        height: "92px",
        backgroundColor: colorToggle(theme),
        border: " 1px solid #F3F6F9",
      }}
    >
      <Toolbar sx={{ marginTop: 2 }}>
        {locationPath === "/MySurveys" && (
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              color= {theme.darkTheme ? "white" : "black"}
              position="relative"
              marginRight="50"
            >
              My Surveys
            </Typography>
          </Toolbar>
        )}
        <Grid container justifyContent="flex-end">
        <ToggleSwitch />
          <NotificationBell badgeContent={4} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            color={theme.darkTheme ? "white" : "black"}
            marginLeft="20px"
            marginTop= "15px"
          >
            Logged as {user.name}
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
