export const ADD_SURVEY = "ADD_SURVEY";
export const SAVE_LOADED_SURVEYS = "SAVE_LOADED_SURVEYS";

export const addNewSurvey = (name, question) => ({
  type: ADD_SURVEY,
  payload: {
    name,
    question,
  },
});

export const saveLoadedSurveys = (surveys) => ({
  type: SAVE_LOADED_SURVEYS,
  payload: [surveys],
});
