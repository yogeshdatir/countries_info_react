import ActionTypes from "../constants/actionTypes";

export const getCountries = () => {
  return {
    type: ActionTypes.GET_COUNTRIES,
  };
};

export const setCountries = (countries) => {
  return {
    type: ActionTypes.SET_COUNTRIES,
    payload: countries,
  };
};
