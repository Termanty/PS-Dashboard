import { ADD_SURVEY } from "./actions";

const surveyReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SURVEY:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default surveyReducer;
