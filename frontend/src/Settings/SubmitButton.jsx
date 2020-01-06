import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';
import Colors from '../common/colors';

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    marginLeft: 10,
    padding: 10,
    backgroundColor: Colors.tealColor,
  },
  text: {
    fontSize: 16,
    color: Colors.textColor,
  },
});

function SubmitButton({ onPress, disabled }) {
  return (
    <TouchableHighlight
      style={[styles.button, disabled ? { backgroundColor: Colors.greyColor } : {}]}
      underlayColor={Colors.lightenTeal}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>Save</Text>
    </TouchableHighlight>
  );
}

SubmitButton.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

SubmitButton.defaultProps = {
  onPress: null,
  disabled: false,
};

export default SubmitButton;
