import { ADD_SURVEY, LOAD_SURVEYS, loadSurveys, addSurvey } from "./actions";

const surveyReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SURVEY:
      console.log(action.payload);
      return [...state, action.payload];
    case LOAD_SURVEYS:
      return [...action.payload];
    default:
      return state;
  }
};

const url = "http://ec2-13-53-206-94.eu-north-1.compute.amazonaws.com/surveys";

export function fetchSurveys() {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(loadSurveys(data));
      });
  };
}

export function addNewSurvey(payload) {
  return (dispatch) => {
    const data = {
      user_id: "531b286f-1307-4c3b-8f7b-95ca95445428",
      name: payload.name,
      text: payload.question,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((survey_id) => {
        dispatch(addSurvey({ ...data, id: survey_id }));
      });
  };
}

export default surveyReducer;
