import { combineReducers, createStore } from "redux";

import userReducer from "./user/reducer";
import surveyReducer from "./surveys/reducer";

const reducers = combineReducers({
  user: userReducer,
  surveys: surveyReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
