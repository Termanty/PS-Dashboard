import { makeStyles } from "@mui/styles";
import { red } from '@mui/material/colors';

export const leftbarStyle = makeStyles({
  drawer: {
    width: "300px",
  },
  drawerPaper: {
    width: "200px",
    color: red,
    backgroundColor: "secondary"
  }
})
