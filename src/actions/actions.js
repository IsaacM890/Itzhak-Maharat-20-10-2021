/** @format */

import { ActionTypes } from '../constants/ActionTypes';

export const setLocations = (locations) => {
  return {
    type: ActionTypes.GET_LOCATIONS_LIST,
    payload: locations,
  };
};

export const setSelectedLocation = (location) => {
  return {
    type: ActionTypes.ON_LOCATION_SELECT,
    payload: location,
  };
};

export const setForecast = (forecast) => {
  return {
    type: ActionTypes.GET_FIVE_DAYS_FORECAST,
    payload: forecast,
  };
};

export const setCurrentConditions = (conditions) => {
  return {
    type: ActionTypes.GET_CURRENT_CONDITIONS,
    payload: conditions,
  };
};

export const addToFavorites = (favorite) => {
  return {
    type: ActionTypes.ADD_TO_FAVORITES,
    payload: favorite,
  };
};

export const removeFromFavorites = (favorite) => {
  return {
    type: ActionTypes.REMOVE_FROM_FAVORITES,
    payload: favorite,
  };
};

export const setDegreeUnit = (degreeUnit) => {
  return {
    type: ActionTypes.GET_DEGREE_UNIT,
    payload: degreeUnit,
  };
};
export const setDarkMode = (darkMode) => {
  return {
    type: ActionTypes.GET_DARK_MODE,
    payload: darkMode,
  };
};
