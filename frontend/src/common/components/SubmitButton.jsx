import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: Colors.blueColor,
  },
});

function SubmitButton({ onPress, direction }) {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor={Colors.lightenTeal}
      onPress={onPress}
    >
      <Ionicons
        name={`ios-arrow-round-${direction}`}
        color="#fff"
        size={36}
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
