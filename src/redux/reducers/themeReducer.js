import ActionTypes from "../constants/actionTypes";

const themeReducer = (state = { currentTheme: "light" }, action) => {
  switch (action.type) {
    case ActionTypes.SET_THEME: {
      return { currentTheme: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
