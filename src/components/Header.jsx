import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header() {
  const drawerWidth = 260;
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        height: "92px",
        backgroundColor: "transparent",
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" color="black">
          Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
