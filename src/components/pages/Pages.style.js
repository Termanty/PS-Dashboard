import { makeStyles } from "@mui/styles";

export const PagesStyle = makeStyles({
  mySurvey: {
    fontSize: "16px",
  },
  openButton: {
    width: "120px",
    height: "40px",
    backgroundColor: "#D66434",
    borderRadius: "25px",
    "&:hover": {
      backgroundColor: "#D66434",
      color: "#fff",
      fontSize: "bolder",
      opacity: [0.4, 0.5, 0.7],
    },
  },
  circle: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "green",
    marginLeft: "10px",
    marginTop: "5px",
  },
});
