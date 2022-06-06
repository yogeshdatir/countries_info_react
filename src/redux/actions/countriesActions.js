import ActionTypes from "../constants/actionTypes";

// TODO: refactor useless actions
export const setLoading = (loading) => {
  return {
    type: ActionTypes.LOADING,
    payload: loading,
  };
};

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

export const setCountriesError = (errorMessage) => {
  return {
    type: ActionTypes.ALL_COUNTRIES_FAIL,
    payload: errorMessage,
  };
};

export const getSearchCountries = (searchTerm) => {
  return {
    type: ActionTypes.GET_SEARCH_COUNTRIES,
    payload: searchTerm,
  };
};

export const setSearchCountries = (countries) => {
  return {
    type: ActionTypes.SET_SEARCH_COUNTRIES,
    payload: countries,
  };
};

export const setSearchCountriesError = (errorMessage) => {
  return {
    type: ActionTypes.SEARCH_COUNTRIES_FAIL,
    payload: errorMessage,
  };
};

export const filterCountries = (selectedRegion) => {
  return {
    type: ActionTypes.FILTER_COUNTRIES,
    payload: selectedRegion,
  };
};

export const setFilterCountriesError = (errorMessage) => {
  return {
    type: ActionTypes.FILTER_COUNTRIES_FAIL,
    payload: errorMessage,
  };
};
export const setTheme = (themeName) => {
  return {
    type: ActionTypes.SET_THEME,
    payload: themeName,
  };
};


export const selectCountryForDetails = (officialName) => {
  return {
    type: ActionTypes.GET_COUNTRY_DETAILS,
    payload: officialName,
  };
};