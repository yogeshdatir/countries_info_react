import { all } from "redux-saga/effects";
import countriesSaga from "./countriesSaga";

export default function* rootSaga() {
  yield all([countriesSaga()]);
}
