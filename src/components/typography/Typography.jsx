/** @format */

import * as React from 'react';
import MatTypography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const STypography = styled(MatTypography)({
  fontFamily: 'Poppins',
});

const Typography = ({
  children,
  size = 'small',
  onClick,
  align = 'left',
  degree,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const getSize = () => {
    switch (size) {
      case 'x-large':
        return 'h4';
      case 'large':
        return 'h5';
      case 'medium':
        return 'h6';
      case 'small':
      case 'x-small':
        return 'subtitle2';
      default:
        return 'subtitle1';
    }
  };
  const degreeSymbol = degree ? '°' : '';
  return (
    <STypography variant={getSize()} onClick={handleClick} align={align}>
      {children}
      {degreeSymbol}
    </STypography>
  );
};

Typography.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default Typography;
