export const ADD_SURVEY = "ADD_SURVEY";
export const LOAD_SURVEYS = "LOAD_SURVEYS";

export const addNewSurvey = (name, question) => ({
  type: ADD_SURVEY,
  payload: {
    name,
    question,
  },
});

export const loadSurveys = (surveys) => ({
  type: LOAD_SURVEYS,
  payload: surveys,
});
