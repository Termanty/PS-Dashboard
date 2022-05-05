import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/reducer";
import surveyReducer from "./surveys/reducer";
import responsesReducer from "./responses/reducer";
import theme from "./theme/themeSlice";
// import MyApp from "../components/LeftBar/LightDark"

export const store = configureStore({
  reducer: {
    user: userReducer,
    surveys: surveyReducer,
    responses: responsesReducer,
    theme,
    
  },
});
