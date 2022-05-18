export const ADD_SURVEY = "ADD_SURVEY";
export const LOAD_SURVEYS = "LOAD_SURVEYS";

export const addSurvey = (survey) => ({
  type: ADD_SURVEY,
  payload: survey,
});

export const loadSurveys = (surveys) => ({
  type: LOAD_SURVEYS,
  payload: surveys,
});
