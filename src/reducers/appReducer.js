/** @format */

import { ActionTypes } from '../constants/ActionTypes';
import { degreeUnitType } from '../constants/degreeUnit';

const intialState = {
  locations: [],
  selectedLocation: {},
  forecast: {},
  currentConditions: {},
  favorites: [],
  degreeUnit: degreeUnitType.CELSIUS,
  themeMode: 'light',
};

export const AppReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_LOCATIONS_LIST:
      return { ...state, locations: payload };
    case ActionTypes.ON_LOCATION_SELECT:
      return { ...state, selectedLocation: payload };
    case ActionTypes.GET_FIVE_DAYS_FORECAST:
      return { ...state, forecast: payload };
    case ActionTypes.GET_CURRENT_CONDITIONS:
      return { ...state, currentConditions: payload };
    case ActionTypes.ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, payload] };
    case ActionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (location) => location.Key !== payload
        ),
      };
    case ActionTypes.GET_DEGREE_UNIT:
      return {
        ...state,
        degreeUnit:
          payload === degreeUnitType.CELSIUS
            ? degreeUnitType.FAHRENHEIT
            : degreeUnitType.CELSIUS,
      };
    case ActionTypes.GET_DARK_MODE:
      return {
        ...state,
        themeMode: payload,
      };
    default:
      return state;
  }
};
