/** @format */

import * as React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Typography from '../typography/Typography';
import { getDegreeUnit } from '../../utils/utils';

const SForecastCard = styled(Card)({
  backgroundColor: 'rgba(255,255,255,0.5)',
  minWidth: '180px',
  display: 'flex',
  flexBasis: '15%',
  height: '220px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
});

const SCardDetailsBox = styled(Box)({
  display: 'flex',
  height: '60%',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednsday',
  'Thursday',
  'Friday',
  'Saturday',
];

const ForecastCard = ({ DailyForecasts }) => {
  const { degreeUnit } = useSelector((state) => state);
  return (
    <SForecastCard>
      <SCardDetailsBox>
        <Typography color='white'>
          {days[new Date(DailyForecasts?.Date).getDay()]}
        </Typography>
        <Typography degree>
          {getDegreeUnit(
            DailyForecasts?.Temperature.Minimum?.Value,
            degreeUnit
          )}
        </Typography>
        <Typography degree>
          {getDegreeUnit(
            DailyForecasts?.Temperature.Maximum?.Value,
            degreeUnit
          )}
        </Typography>
        <Typography>{DailyForecasts?.Day?.IconPhrase}</Typography>
      </SCardDetailsBox>
    </SForecastCard>
  );
};

export default ForecastCard;
