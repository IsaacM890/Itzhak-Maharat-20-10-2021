/** @format */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDegreeUnit, setDarkMode } from '../../actions/actions';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '../typography/Typography';
import Link from '../link/Link';

const SAppBar = styled(AppBar)({
  display: 'flex',
  position: 'static',
});

const SToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: 'Poppins',
});

const SLinkBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const SwitchLabels = () => {
  const { degreeUnit, themeMode } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDegreeUnit = (degreeUnit) => {
    dispatch(setDegreeUnit(degreeUnit));
  };
  const handleThemeMode = (e) => {
    const theme = e.target.checked ? 'dark' : 'light';
    dispatch(setDarkMode(theme));
  };

  return (
    <FormGroup>
      <FormControlLabel
        onChange={handleThemeMode}
        control={<Switch />}
        label={themeMode}
      />
      <FormControlLabel
        onChange={(e) => handleDegreeUnit(e.target.value)}
        control={<Switch value={degreeUnit} />}
        label={degreeUnit}
      />
    </FormGroup>
  );
};

const Header = () => {
  return (
    <SAppBar color='transparent'>
      <SToolbar>
        <Typography size='large'>Herolo Weather</Typography>
        <SLinkBox>
          <SwitchLabels />
          <Link to='/'>
            <Typography size='medium'>Home</Typography>
          </Link>
          <Link to='/favorites'>
            <Typography size='medium'>Favorites</Typography>
          </Link>
        </SLinkBox>
      </SToolbar>
    </SAppBar>
  );
};

export default Header;
