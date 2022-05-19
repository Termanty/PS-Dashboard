import { makeStyles } from "@mui/styles";

export const NewSurvey = makeStyles({
  title: {
    fontSize: 25,
    color: "black",
    textAlign: "left",
    marginLeft: "90px",
  },
  inputTitle: {
    fontSize: 20,
    color: "black",
    textAlign: "left",
    marginLeft: 90,
    marginBottom: 20,
    paddingLeft: "10px",
    border: "none",
    borderRadius: "5px",
    width: "78.9%",
  },
  inputMessage: {
    fontSize: 20,
    color: "black",
    textAlign: "left",
    marginLeft: "25px",
    border: "none",
    borderRadius: "5px",
    width: "78.9%",
  },
  saveButton: {
    backgroundColor: "#D66434",
    color: "white",
    width: "150px",
    height: "55px",
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: "#D66434",
      opacity: [0.4, 0.5, 0, 7],
    },
  },
});
