/** @format */

import * as React from 'react';
import MatButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const PrimaryButton = styled(MatButton)({
  borderRadius: '8px',
  height: '30px',
});

const Button = ({ onClick, title, children }) => {
  return (
    <PrimaryButton onClick={onClick} title={title}>
      {children}
    </PrimaryButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default Button;
