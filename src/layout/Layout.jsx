/** @format */

import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Header from '../components/header/Header';

const SWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SMainContent = styled(Box)`
  width: 80%;
  height: 100%;
  margin-top: 20px;
  flex-basis: 90%;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

const SHeaderBox = styled(Box)`
  flex-basis: 10%;
  width: 100%;
`;

const Layout = ({ children }) => (
  <SWrapper>
    <SHeaderBox>
      <Header />
    </SHeaderBox>
    <SMainContent>{children}</SMainContent>
  </SWrapper>
);

export default Layout;
