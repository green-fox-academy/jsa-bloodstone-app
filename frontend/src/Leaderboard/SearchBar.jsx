import React, { useState } from 'react';
import {
  TextInput, StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { CardView } from '../common/components';
import colors from '../common/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 0,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    height: 24,
    lineHeight: 24,
  },
});

function SearchBar({ onSubmit, placeholder }) {
  const [value, setValue] = useState('');

  return (
    <CardView style={styles.container}>
      <Ionicons name="md-search" size={20} color={colors.tealColor} />
      <TextInput
        style={styles.inputStyle}
        value={value}
        onChangeText={(text) => setValue(text)}
        onSubmitEditing={() => onSubmit(value)}
        placeholder={placeholder}
      />
    </CardView>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  onSubmit: null,
  placeholder: 'Search',
};

export default SearchBar;
