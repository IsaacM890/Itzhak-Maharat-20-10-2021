/** @format */

const API_KEY = 'W8ay9BMGUdgLh7r9Xn4zHkXDTSN4kGSA';

export const baseURL = {
  getLocationkey:
    'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search',
  autocompleteSearchURL:
    'https://dataservice.accuweather.com/locations/v1/cities/autocomplete',
  currentConditionsURL:
    'https://dataservice.accuweather.com/currentconditions/v1/',
  dailyForecastURL:
    'https://dataservice.accuweather.com/forecasts/v1/daily/1day/',
  fiveDaysForecastURL:
    'https://dataservice.accuweather.com/forecasts/v1/daily/5day/',
};

export const endPoints = {
  searchPoint: `?apikey=${API_KEY}&q=`,
  basic: `?apikey=${API_KEY}&details=true`,
};
