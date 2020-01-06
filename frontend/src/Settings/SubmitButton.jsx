import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, TouchableHighlight, Text, ViewPropTypes,
} from 'react-native';
import Colors from '../common/colors';

function SubmitButton({
  style, onPress, disabled, text,
}) {
  const styles = StyleSheet.create({
    button: {
      borderRadius: 5,
      width: 100,
      marginLeft: 10,
      padding: 10,
      backgroundColor: disabled ? Colors.greyColor : Colors.tealColor,
    },
    text: {
      fontSize: 16,
      color: Colors.textColor,
      textAlign: 'center',
    },
  });

  return (
    <TouchableHighlight
      style={[styles.button, style]}
      underlayColor={Colors.lightenTeal}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
}

SubmitButton.propTypes = {
  style: ViewPropTypes.style,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

SubmitButton.defaultProps = {
  onPress: null,
  disabled: false,
  style: null,
};

export default SubmitButton;
