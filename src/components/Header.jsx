import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useLocation} from "react-router-dom";
import Grid from "@mui/material/Grid";
import NotificationBell from "./Notification/NotificationBell";

function Header() {
  const user = useSelector((state) => state.user);
  const drawerWidth = 260;
  const location = useLocation();
  const locationPath = location.pathname;
  return (
   <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        height: "92px",
        backgroundColor: "white",
        border:" 1px solid #F3F6F9",
        zIndex: 1100,
      }}
    >
    <Toolbar sx = {{ marginTop: 2 }}>
      { locationPath === "/MySurveys" &&
      <Toolbar>
      <Typography variant = "h6" noWrap component = "div" color = "black" position = "relative" marginRight = "50">
      My Surveys
      </Typography>

      </Toolbar>
      }
      <Grid container justifyContent = "flex-end">
      <NotificationBell badgeContent = {4}/>
       <Typography variant = "h6" noWrap component = "div" color = "black" marginLeft = "20px">
         Logged as {user.name}
       </Typography>
       </Grid>
    </Toolbar>
   </AppBar>
  );
}

export default Header;
