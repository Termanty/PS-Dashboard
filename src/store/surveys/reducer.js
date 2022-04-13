import { ADD_SURVEY, LOAD_SURVEYS, loadSurveys } from "./actions";

const surveyReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SURVEY:
      return [...state, action.payload];
    case LOAD_SURVEYS:
      return [...action.payload];
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
        dispatch(loadSurveys(data));
      });
  };
}

export default surveyReducer;
