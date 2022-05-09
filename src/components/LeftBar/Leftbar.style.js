import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";
import { amber, deepOrange, grey } from '@mui/material/colors';

export const leftbarStyle = makeStyles({
  addButton: {
    backgroundColor: "white",
    color: "black",
    width: "200px",
    height: "55px",
    borderRadius: "3px",
    marginLeft: "20px",
  },
  logoutButton: {
    backgroundColor: "#D66434",
    color: "white",
    width: "200px",
    height: "55px",
    borderRadius: "3px",
    marginLeft: "20px",
  },
  headerIndex: {
    overflow: "scoll"
  }
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
      primary: '#fff',
            secondary: grey[500],
    },
  },
});