/** @format */

import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';

const SAutocompleteSearch = styled(Autocomplete)({
  width: '100%',
});

const AutocompleteSearch = ({
  autoCompleteList = [],
  onChange,
  onSelected,
  inputValue,
}) => (
  <SAutocompleteSearch
    id='autocomplete-serach-box'
    inputValue={inputValue}
    options={autoCompleteList}
    onChange={(e, option) => onSelected(option)}
    getOptionLabel={(option) => option.LocalizedName}
    renderInput={(params) => (
      <TextField
        onChange={onChange}
        {...params}
        label='Search City...'
        InputProps={{
          ...params.InputProps,
          type: 'search',
        }}
      />
    )}
  />
);

AutocompleteSearch.propTypes = {
  autoCompleteList: PropTypes.array,
  onChange: PropTypes.func,
  inputValue: PropTypes.string,
};

export default AutocompleteSearch;
