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

function SubmitButton({ onPress }) {
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor={Colors.lightenTeal}
      onPress={onPress}
    >
      <Text style={styles.text}>Save</Text>
    </TouchableHighlight>
  );
}

SubmitButton.propTypes = {
  onPress: PropTypes.func,
};

SubmitButton.defaultProps = {
  onPress: null,
};

export default SubmitButton;
