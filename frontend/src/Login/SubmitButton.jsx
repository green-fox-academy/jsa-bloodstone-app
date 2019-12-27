import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Ionicons from '@expo/vector-icons';
import Colors from '../common/colors';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: Colors.tealColor,
  },
});

function SubmitButton({ onPress, direction }) {
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor={Colors.lightenTeal}
      onPress={onPress}
    >
      <Ionicons
        name={`ios-arrow-round-${direction}`}
        color="#fff"
        size={32}
        style={styles.icon}
      />
    </TouchableHighlight>
  );
}

SubmitButton.propTypes = {
  onPress: PropTypes.func,
  direction: PropTypes.oneOf(['back', 'forward']),
};

SubmitButton.defaultProps = {
  onPress: null,
  direction: 'forward',
};

export default SubmitButton;
