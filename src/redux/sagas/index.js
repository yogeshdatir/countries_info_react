import { all } from "redux-saga/effects";
import {
  countriesSaga,
  filterCountriesSaga,
  searchCountriesSaga,
} from "./countriesSaga";

export default function* rootSaga() {
  yield all([countriesSaga(), searchCountriesSaga(), filterCountriesSaga()]);
}
