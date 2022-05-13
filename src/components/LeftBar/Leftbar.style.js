import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const leftbarStyle = makeStyles({
  addButton: {
    backgroundColor: "white",
    color: "black",
    width: "200px",
    height: "55px",
    borderRadius: "3px",
    marginLeft: "20px",
    "&:hover": {
      backgroundColor: "sandybrown",
      opacity: [0.4, 0.5, 0.7],
    },
  },
  logoutButton: {
    backgroundColor: "#D66434",
    color: "white",
    width: "200px",
    height: "55px",
    borderRadius: "3px",
    marginLeft: "20px",
    "&:hover": {
      backgroundColor: "sandybrown",
      opacity: [0.4, 0.5, 0, 7],
    },
  },
  headerIndex: {
    overflow: "scoll",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#ffffff",
    },
    text: {
      primary: "#111111",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#222",
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  },
});
