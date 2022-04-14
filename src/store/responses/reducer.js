import { LOAD_RESPONSES, loadResponses } from "./actions";

export const responsesReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_RESPONSES:
      return [...action.payload];
    default:
      return state;
  }
};

export function fetchResponses() {
  return (dispatch) => {
    const url =
      "http://ec2-13-53-206-94.eu-north-1.compute.amazonaws.com/responses";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadResponses(data));
      });
  };
}

export default responsesReducer;
