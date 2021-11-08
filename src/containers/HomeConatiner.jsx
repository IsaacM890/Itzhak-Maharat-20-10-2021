/** @format */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';
import Home from '../pages/Home';
import {
  autoCompleteListAPI,
  fiveDaysForecastAPI,
  currentConditionsAPI,
  getLocationKeyAPI,
} from '../api/apis';
import {
  setLocations,
  setSelectedLocation,
  setForecast,
  setCurrentConditions,
  addToFavorites,
  removeFromFavorites,
} from '../actions/actions';

const HomeContainer = () => {
  const [locationValue, setLocationValue] = useState('');
  const {
    favorites,
    locations,
    selectedLocation,
    forecast,
    currentConditions,
    degreeUnit,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const debounceAutoComplete = debounce(
    (val) => getLocationsAutoComplete(val),
    500
  );

  const getLocationsAutoComplete = async (value) => {
    try {
      const response = await autoCompleteListAPI(value);
      dispatch(setLocations(response.data));
    } catch (e) {
      console.error(e.message);
    }
  };

  const getForecast = async (cityKey) => {
    try {
      const response = await fiveDaysForecastAPI(cityKey);
      dispatch(setForecast(response.data));
    } catch (e) {
      console.error(e.message);
    }
  };

  const getCurrentConditions = async (cityKey) => {
    try {
      const response = await currentConditionsAPI(cityKey);
      dispatch(setCurrentConditions(response.data[0]));
    } catch (e) {
      console.error(e.message);
    }
  };

  const onChange = (e) => {
    const { value } = e.target;
    setLocationValue(value);
  };

  const onSelected = (location) => {
    if (location?.Key) {
      dispatch(setSelectedLocation(location));
      getCurrentConditions(location.Key);
      getForecast(location.Key);
    }
  };

  const isCurrentLocationInFavList = () => {
    const currentLocation = favorites?.find(
      (location) => location.Key === selectedLocation.Key
    );
    return currentLocation || false;
  };

  const addToFav = () => {
    if (!isCurrentLocationInFavList()) {
      dispatch(
        addToFavorites({
          ...currentConditions,
          LocalizedName: selectedLocation.LocalizedName,
          Key: selectedLocation.Key,
        })
      );
    } else {
      dispatch(removeFromFavorites(selectedLocation.Key));
    }
  };

  const getLocationKeyByGeoLocation = () => {
    try {
      navigator.geolocation?.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        if (latitude && longitude) {
          const response = await getLocationKeyAPI(latitude, longitude);
          response?.data && onSelected(response.data);
        }
      });
    } catch (e) {
      console.error(e.message);
    }
  };

  const reset = () => {
    dispatch(setCurrentConditions({}));
    dispatch(setForecast({}));
    dispatch(setCurrentConditions({}));
  };

  let query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    if (query.get('citykey')) {
      getForecast(query.get('citykey'));
      getCurrentConditions(query.get('citykey'));
    } else {
      getLocationKeyByGeoLocation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (locationValue) {
      debounceAutoComplete(locationValue);
    } else {
      reset();
    }
    return () => console.log('unmount');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationValue]);

  return (
    <Home
      forecast={forecast}
      locationValue={locationValue}
      onSelected={onSelected}
      onChange={onChange}
      locations={locations}
      addToFav={addToFav}
      selectedLocation={selectedLocation}
      currentConditions={currentConditions}
      degreeUnit={degreeUnit}
      isCurrentLocationInFavList={isCurrentLocationInFavList}
    />
  );
};

export default HomeContainer;
