import ActionTypes from "../constants/actionTypes";

export const setTheme = (themeName) => {
  return {
    type: ActionTypes.SET_THEME,
    payload: themeName,
  };
};
