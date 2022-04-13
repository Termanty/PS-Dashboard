import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/reducer";
import surveyReducer from "./surveys/reducer";
import responsesReducer from "./responses/reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    surveys: surveyReducer,
    responses: responsesReducer,
  },
});
