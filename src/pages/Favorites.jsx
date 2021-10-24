/** @format */

import React from 'react';
import Box from '@mui/material/Box';
import Link from '../components/link/Link';
import { styled } from '@mui/material/styles';
import FavoriteCard from '../components/favoriteCard/FavoriteCard';

const SFavoriteseBox = styled(Box)({
  display: 'flex',
  flexBasis: '100%',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  padding: '5%',
  flexDirection: 'row',
  rowGap: '15px',
});

const Favorites = ({ removeFromFav, favorites }) => {
  return (
    <SFavoriteseBox>
      {favorites.map((location) => (
        <Link to={`/?citykey=${location.Key}`}>
          <FavoriteCard
            removeFromFav={removeFromFav}
            currentConditions={location}
          />
        </Link>
      ))}
    </SFavoriteseBox>
  );
};

export default Favorites;
