import axios from "axios";
import ActionTypes from "../constants/actionTypes";
import { call, put, takeEvery } from "redux-saga/effects";
import { setCountries } from "../actions/countriesActions";

const getCountries = () => {
  return axios.get("https://restcountries.com/v2/all");
};

function* handleGetPosts(action) {
  try {
    const response = yield call(getCountries);
    const { data } = response;
    yield put(setCountries(data));
  } catch (error) {
    console.log(error);
  }
}

function* countriesSaga() {
  yield takeEvery(ActionTypes.GET_COUNTRIES, handleGetPosts);
}

export default countriesSaga;
