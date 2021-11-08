/** @format */

const API_KEY = 'cucTY4zNvv1Nb2mHLDu0YRT31fGmNKoW';

export const baseURL = {
  getLocationkey:
    'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search',
  autocompleteSearchURL:
    'https://dataservice.accuweather.com/locations/v1/cities/autocomplete',
  currentConditionsURL:
    'https://dataservice.accuweather.com/currentconditions/v1/',
  fiveDaysForecastURL:
    'https://dataservice.accuweather.com/forecasts/v1/daily/5day/',
};

export const endPoints = {
  searchPoint: `?apikey=${API_KEY}&q=`,
  basic: `?apikey=${API_KEY}&details=true&metric=true`,
};
