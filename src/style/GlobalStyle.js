/** @format */

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';

const darkMode = {
  background: '#393e46',
};
const lightMode = {
  background: '#e8d5b7',
};

const Sstyle = createGlobalStyle`
body {
    background: ${({ theme }) =>
      theme === 'light' ? lightMode.background : darkMode.background};
    transition:all 0.25s linear
    color:white
  }
`;

const GlobalStyle = () => {
  const { themeMode } = useSelector((state) => state);
  return <Sstyle theme={themeMode} />;
};

export default GlobalStyle;
