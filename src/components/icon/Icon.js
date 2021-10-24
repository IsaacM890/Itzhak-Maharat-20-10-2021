/** @format */

import React from 'react';
import styled from 'styled-components';

const SIcon = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 20px;
`;

const Icon = ({src = 'https://via.placeholder.com/120?text=N/A', alt}) => {
  return <SIcon src={src} alt={alt} /> ;
};

export default Icon;
