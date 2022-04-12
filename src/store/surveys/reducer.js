import { ADD_SURVEY, SAVE_LOADED_SURVEYS, saveLoadedSurveys } from "./actions";

const surveyReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SURVEY:
      return [...state, action.payload];
    case SAVE_LOADED_SURVEYS:
      return [...action.payload[0]];
    default:
      return state;
  }
};

export function fetchSurveys() {
  return (dispatch) => {
    const url =
      "http://ec2-13-53-206-94.eu-north-1.compute.amazonaws.com/surveys";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(saveLoadedSurveys(data));
      });
  };
}

export default surveyReducer;
