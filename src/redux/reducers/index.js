import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  countriesList: countriesReducer,
  theme: themeReducer,
});

export default rootReducer;
