/** @format */

import * as React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const SLink = styled(RouteLink)({
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginRight: 10,
});

const Link = ({ children, to }) => {
  return <SLink to={to}>{children}</SLink>;
};

Link.propTypes = {
  to: PropTypes.string,
};

export default Link;
