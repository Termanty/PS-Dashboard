export const ADD_SURVEY = "ADD_SURVEY";

export const addNewSurvey = (name, question) => ({
  type: ADD_SURVEY,
  payload: {
    name,
    question,
  },
});
