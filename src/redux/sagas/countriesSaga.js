import axios from "axios";
import ActionTypes from "../constants/actionTypes";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  setCountries,
  setLoading,
  setSearchCountriesError,
} from "../actions/countriesActions";
import { Messages } from "../constants/messages";

const getCountries = () => {
  return axios.get("https://restcountries.com/v3.1/all");
};

// TODO: Error handling for different kinds of errors.
function* handleGetCountries(action) {
  try {
    yield put(setLoading(true));
    yield put(setSearchCountriesError(""));
    const response = yield call(getCountries);
    const { data } = response;
    yield put(setCountries(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setSearchCountriesError(Messages.ALL_COUNTRIES_ERROR));
    yield put(setCountries([]));
    console.error(error);
  }
}

export function* countriesSaga() {
  yield takeEvery(ActionTypes.GET_COUNTRIES, handleGetCountries);
}

const getSearchCountries = (searchTerm) => {
  return axios.get(`https://restcountries.com/v3.1/name/${searchTerm}`);
};

function* handleGetSearchCountries(action) {
  try {
    yield put(setLoading(true));
    yield put(setSearchCountriesError(""));
    const response = yield call(getSearchCountries, action.payload);
    const { data } = response;
    yield put(setCountries(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setSearchCountriesError(Messages.SEARCH_COUNTRIES_ERROR));
    yield put(setCountries([]));
    console.error(error);
  }
}

export function* searchCountriesSaga() {
  yield takeEvery(ActionTypes.GET_SEARCH_COUNTRIES, handleGetSearchCountries);
}

const filterCountries = (selectedRegion) => {
  return axios.get(`https://restcountries.com/v3.1/region/${selectedRegion}`);
};

function* handleFilterCountries(action) {
  try {
    yield put(setLoading(true));
    yield put(setSearchCountriesError(""));
    const response = yield call(filterCountries, action.payload);
    const { data } = response;
    yield put(setCountries(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setSearchCountriesError(Messages.FILTER_COUNTRIES_ERROR));
    yield put(setCountries([]));
    console.error(error);
  }
}

export function* filterCountriesSaga() {
  yield takeEvery(ActionTypes.FILTER_COUNTRIES, handleFilterCountries);
}