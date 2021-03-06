import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";
//import Logo from "./logo.svg";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DataThresholdingRoundedIcon from "@mui/icons-material/DataThresholdingRounded";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AddIcon from '@mui/icons-material/Add';

import { leftbarStyle } from "./Leftbar.style.js";
import HomeIcon from "./HomeIcon";
import CodeIcon from '@mui/icons-material/Code';

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
          justifyContent: "left",
          alignItems: "left",
          paddingLeft: "57px",
          paddingTop: "7px"
        }}
      >
        <Link to="/">
        <Logo />
        </Link>
      </Box>
      {/* <Toolbar /> */}
      <Divider color="gray" variant="soft"/>
      <List>
        <ListItem button key="Home" component={Link} to="/">
          <ListItemIcon>
            <HomeIcon sx={{ fontSize: 30, color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button key="My surveys" component={Link} to="/MySurveys">
          <ListItemIcon>
            <AutoAwesomeMosaicIcon sx={{ fontSize: 30, color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="My Surveys" />
        </ListItem>
        <Divider color="gray" />
        <ListItem button key="Data" component={Link} to="/Data">
          <ListItemIcon>
            <DataThresholdingRoundedIcon
              sx={{ fontSize: 30, color: "white" }}
            />
          </ListItemIcon>
          <ListItemText primary="Data" />
        </ListItem>

        <ListItem button key="Embed" component={Link} to="/Embed">
          <ListItemIcon>
            <CodeIcon sx={{color: "white", fontSize: 30}} />
          </ListItemIcon>
          <ListItemText primary="Embed" />
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
          <ListItemIcon sx={{minWidth: "20px"}}>
            <AddIcon style={{ color: "black" }} />
          </ListItemIcon>
        </ListItem>

        <ListItem
          sx={{ marginTop: "300px" }}
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
