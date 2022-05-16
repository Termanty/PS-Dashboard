import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { NewSurvey } from "../CreateSurvey/NewSurvey.style.js";

function CreateNewSurvey() {
  const classes = NewSurvey();

  return (
    <Paper
      sx={{
        width: 800,
        height: 600,
        backgroundColor: "#D7E5F0",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: "25%",
        marginTop: "10%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 100,
          backgroundColor: "rgb(22, 38, 57)",
        }}
      ></div>
      <label className={classes.title}>
        Suvey Title<span style={{ color: "red", fontSize: 45 }}>*</span>
      </label>
      <input type="text" className={classes.inputTitle} />
      <label className={classes.title}>Welcome message</label>
      <textarea rows="6" cols="50" className={classes.inputMessage}></textarea>
      <Button className={classes.saveButton} sx={{ marginTop: 4 }}>
        Save
      </Button>
    </Paper>
  );
}

export default CreateNewSurvey;
