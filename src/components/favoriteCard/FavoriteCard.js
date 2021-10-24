/** @format */

import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Typography from '../typography/Typography';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const SForecastCard = styled(Card)({
  backgroundColor: 'rgba(255,255,255,0.5)',
  minWidth: '180px',
  display: 'flex',
  flexBasis: '15%',
  height: '220px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
});

const SCardDetailsBox = styled(Box)({
  display: 'flex',
  height: '60%',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const FavoriteCard = ({ currentConditions, removeFromFav }) => {
  return (
    
    <SForecastCard>
      <SCardDetailsBox>
        <IconButton onClick={() => removeFromFav(currentConditions.Key)}>
          <RemoveCircleOutlineIcon />
        </IconButton>
        <Typography color='white'>{currentConditions.LocalizedName}</Typography>
        <Typography degree>
          {currentConditions.Temperature?.Metric.Value}
        </Typography>
        <Typography degree>{currentConditions?.WeatherText}</Typography>
      </SCardDetailsBox>
    </SForecastCard>
  );
};

export default FavoriteCard;
