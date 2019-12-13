import React, { useState } from 'react';
import { TextInput, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const defaultStyle = {
  fontSize: 24,
};

function SearchBar({ onSubmit, style }) {
  const [val, setVal] = useState('');
  return (
    <TextInput
      style={[defaultStyle, style]}
      onChangeText={(text) => setVal(text)}
      onSubmitEditing={() => onSubmit(val)}
      placeholder="🔎"
    />
  );
}

SearchBar.propTypes = {
  style: ViewPropTypes.style,
  onSubmit: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  style: null,
};

export default SearchBar;
