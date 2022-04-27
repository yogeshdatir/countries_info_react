import ActionTypes from "../constants/actionTypes";

const countriesReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.GET_COUNTRIES: {
      return { ...state };
    }
    case ActionTypes.SET_COUNTRIES: {
      return { ...state, countries: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default countriesReducer;
