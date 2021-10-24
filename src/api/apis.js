/** @format */

import { baseURL, endPoints } from './urls';
import axios from 'axios';

export const getLocationKeyAPI = (lat, lon) =>
  axios.get(baseURL.getLocationkey + endPoints.searchPoint + `${lat},${lon}`);

export const autoCompleteListAPI = (query) =>
  axios.get(baseURL.autocompleteSearchURL + endPoints.searchPoint + query);

export const currentConditionsAPI = (cityKey) =>
  axios.get(baseURL.currentConditionsURL + cityKey + endPoints.basic);

export const dailyForecastAPI = (cityKey) =>
  axios.get(baseURL.dailyForecastURL + cityKey + endPoints.basic);

export const fiveDaysForecastAPI = (cityKey) =>
  axios.get(baseURL.fiveDaysForecastURL + cityKey + endPoints.basic);


  