import React, { useState } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

const defaultStyle = {
  fontSize: 24,
};

function SearchBar({ style, onSubmit, placeholder }) {
  const [val, setVal] = useState('');
  return (
    <TextInput
      style={[defaultStyle, style]}
      onChangeText={(text) => setVal(text)}
      onSubmitEditing={() => onSubmit(val)}
      placeholder={placeholder}
    />
  );
}

SearchBar.propTypes = {
  style: TextInput.propTypes.style,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  style: null,
  placeholder: '🔎',
};

export default SearchBar;
