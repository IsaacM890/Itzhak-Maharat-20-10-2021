/** @format */
import { degreeUnitType } from '../constants/degreeUnit';

export const getWeatherIcon = (icon) => {
  if (!icon) return;

  const imgSrc = `https://vortex.accuweather.com/adc2010/images/slate/icons/${icon}.svg`;
  return imgSrc;
};

export const getDegreeUnit = (degree, unit) => {
  if (!degree) return '';
  debugger;
  const degreeNumber = unit === degreeUnitType.CELSIUS ? degree : cToF(degree);

  return unit === degreeUnitType.CELSIUS
    ? `${degreeNumber.toFixed(1)}C`
    : `${degreeNumber.toFixed(1)}F`;
};

const cToF = (degree) => (degree * 9) / 5 + 32;
