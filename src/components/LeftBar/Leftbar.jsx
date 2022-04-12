import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./phz-logo-small.svg";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DataThresholdingRoundedIcon from "@mui/icons-material/DataThresholdingRounded";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";

import { leftbarStyle } from "./Leftbar.style.js";
import HomeIcon from "./HomeIcon";

const drawerWidth = 260;

function Leftbar() {
  const classes = leftbarStyle();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          height: "100%",
          backgroundColor: "rgb(22, 38, 57)",
          color: "white",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* <Logo /> */}
      <Box
        sx={{
          height: "92px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo />
      </Box>
      {/* <Toolbar /> */}
      <Divider color="gray" />
      <List>
        <ListItem button key="Home" component={Link} to="/">
          <ListItemIcon>
            <HomeIcon color="success" sx={{ fontSize: 40 }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button key="My surveys" component={Link} to="/MySurveys">
          <ListItemIcon>
            <AutoAwesomeMosaicIcon color="success" sx={{ fontSize: 40 }} />
          </ListItemIcon>
          <ListItemText primary="My surveys" />
        </ListItem>
      </List>
      <Divider color="gray" />
      <List>
        <ListItem button key="Data" component={Link} to="/Data">
          <ListItemIcon>
            <DataThresholdingRoundedIcon
              color="success"
              sx={{ fontSize: 40 }}
            />
          </ListItemIcon>
          <ListItemText primary="Data" />
        </ListItem>

        <ListItem
          sx={{ marginTop: "50px", textAlign: "center" }}
          button
          className={classes.addButton}
          key={"Create new survey"}
          component={Link}
          to="/CreateNewSurvey"
        >
          <ListItemText primary={"Create new survey"} />
        </ListItem>

        <ListItem
          sx={{ marginTop: "150px" }}
          button
          className={classes.logoutButton}
          key={"Logout"}
        >
          <ListItemText primary={"Logout"} sx={{ textAlign: "center" }} />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Leftbar;
