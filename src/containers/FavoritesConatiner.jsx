/** @format */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../actions/actions';
import Favorites from '../pages/Favorites';

const FavoritesConatiner = () => {
  const { favorites } = useSelector((state) => state); 
  const dispatch = useDispatch();

  const removeFromFav = (key) => {
    dispatch(removeFromFavorites(key));
  };

  return <Favorites favorites={favorites} removeFromFav={removeFromFav} />;
};

export default FavoritesConatiner;
