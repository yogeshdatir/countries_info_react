import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";

const rootReducer = combineReducers({ countriesList: countriesReducer });

export default rootReducer;
