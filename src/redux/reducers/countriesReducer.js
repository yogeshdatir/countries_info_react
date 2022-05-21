import ActionTypes from "../constants/actionTypes";

const countriesReducer = (
  state = { countries: [], loading: false, error: "" },
  action
) => {
  switch (action.type) {
    case ActionTypes.LOADING: {
      return { ...state, loading: action.payload };
    }

    case ActionTypes.GET_COUNTRIES: {
      return { ...state };
    }
    case ActionTypes.SET_COUNTRIES: {
      return { ...state, countries: action.payload };
    }
    case ActionTypes.GET_SEARCH_COUNTRIES: {
      return { ...state };
    }
    case ActionTypes.SET_SEARCH_COUNTRIES: {
      return { ...state, countries: action.payload };
    }
    case ActionTypes.ALL_COUNTRIES_FAIL: {
      return { ...state, error: action.payload };
    }
    case ActionTypes.SEARCH_COUNTRIES_FAIL: {
      return { ...state, error: action.payload };
    }
    case ActionTypes.FILTER_COUNTRIES_FAIL: {
      return { ...state, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default countriesReducer;
