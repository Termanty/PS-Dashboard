import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { addNewSurvey } from "../../store/surveys/reducer.js";
import { NewSurvey } from "../CreateSurvey/NewSurvey.style.js";

function CreateNewSurvey() {
  const [input, setInput] = useState({ name: "a", question: "b" });
  const dispatch = useDispatch();

  const classes = NewSurvey();

  function inputHandler(e) {
    const el = e.target;
    setInput({ ...input, [el.name]: el.value });
  }

  function saveHandler(e) {
    console.log(input);
    dispatch(addNewSurvey({ ...input }));
    addNewSurvey(dispatch);
  }

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
        Survey name<span style={{ color: "red", fontSize: 45 }}>*</span>
      </label>
      <input
        name="name"
        type="text"
        className={classes.inputTitle}
        onChange={inputHandler}
      />
      <label className={classes.title}>Survey question</label>
      <textarea
        name="question"
        rows="6"
        cols="50"
        className={classes.inputMessage}
        onChange={inputHandler}
      ></textarea>
      <Button
        className={classes.saveButton}
        sx={{ marginTop: 4, textTransform: "none" }}
        onClick={saveHandler}
      >
        Save
      </Button>
    </Paper>
  );
}

export default CreateNewSurvey;
