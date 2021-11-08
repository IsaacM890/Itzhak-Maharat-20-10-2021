/** @format */

import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoCompleteSearch from '../components/autoComplete/AutoCompleteSearch';
import Icon from '../components/icon/Icon';
import { getWeatherIcon, getDegreeUnit } from '../utils/utils';
import Typography from '../components/typography/Typography';
import Card from '../components/card/Card';

const SAutocompleteBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px auto',
  maxWidth: '400px',
});

const SWeatherDetailsBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  borderRadius: '20px',
  backgroundColor: 'rgba(255,255,255,0.3)',
});

const SAddToFavoritesIconBox = styled(Box)({
  padding: '20px',
});

const SCityDetailsWrapper = styled(Box)({
  height: '200px',
  width: '400px',
  display: 'flex',
  flexDirection: 'row',
  padding: '20px',
  flexWrap: 'wrap',
});

const SCityCaptionBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '20px',
});

const SIconBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const STopSectionBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  @media (max-width: 750px) {
    flex-direction: column-reverse;
    flex-wrap: wrap;
    align-items: center;
  }
`;
const SMiddleSectionBox = styled(Box)({
  width: '100%',
  padding: '40px 0',
});

const SBottomSectionBox = styled(Box)({
  display: 'flex',
  padding: '15px',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  rowGap: '15px',
});

const Home = (props) => {
  const {
    forecast,
    locationValue,
    onSelected,
    onChange,
    locations,
    addToFav,
    selectedLocation,
    currentConditions,
    degreeUnit,
    isCurrentLocationInFavList,
  } = props;
  
  const getFavIconColor = () => {
    return isCurrentLocationInFavList() ? 'red' : 'gray';
  };

  const printWeatherDetailsTopSection = () => {
    const show =
      Object.keys(selectedLocation).length &&
      Object.keys(currentConditions).length;

    if (!show) return;

    return (
      <STopSectionBox>
        <SCityDetailsWrapper>
          <SIconBox>
            <Icon
              src={getWeatherIcon(currentConditions?.WeatherIcon)}
              alt='weather icon'
            />
          </SIconBox>
          <SCityCaptionBox>
            {selectedLocation?.LocalizedName && selectedLocation.Country && (
              <Typography size='x-large'>
                {selectedLocation.LocalizedName +
                  ', ' +
                  selectedLocation.Country?.ID}
              </Typography>
            )}
            {currentConditions.Temperature && (
              <Typography degree size='large'>
                {getDegreeUnit(
                  currentConditions.Temperature?.Metric.Value,
                  degreeUnit
                )}
              </Typography>
            )}
          </SCityCaptionBox>
        </SCityDetailsWrapper>
        <SAddToFavoritesIconBox>
          <IconButton onClick={addToFav}>
            <FavoriteIcon sx={{ color: getFavIconColor() }} fontSize='large' />
          </IconButton>
        </SAddToFavoritesIconBox>
      </STopSectionBox>
    );
  };

  const printWeatherDetailsMiddleSection = () => {
    return (
      forecast?.Headline && (
        <SMiddleSectionBox>
          <Typography align='center' size='large'>
            {forecast.Headline?.Text}
          </Typography>
        </SMiddleSectionBox>
      )
    );
  };

  const printWeatherDetailsBottomSection = () => {
    return (
      forecast?.DailyForecasts && (
        <SBottomSectionBox>
          {forecast?.DailyForecasts?.map((item, index) => (
            <Card key={index} DailyForecasts={item} />
          ))}
        </SBottomSectionBox>
      )
    );
  };

  return (
    <>
      <SAutocompleteBox>
        <AutoCompleteSearch
          autoCompleteList={locations}
          onChange={onChange}
          onSelected={onSelected}
          inputValue={locationValue}
        />
      </SAutocompleteBox>
      <SWeatherDetailsBox>
        {printWeatherDetailsTopSection()}
        {printWeatherDetailsMiddleSection()}
        {printWeatherDetailsBottomSection()}
      </SWeatherDetailsBox>
    </>
  );
};

export default Home;
