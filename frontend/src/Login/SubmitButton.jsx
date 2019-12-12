import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  icon: {
    marginRight: -2,
    marginTop: -2,
  },
});

function SubmitButton({ onPress }) {
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor={Colors.lightenTeal}
      onPress={onPress}
    >
      <Icon
        name="angle-right"
        color="#fff"
        size={32}
        style={styles.icon}
      />
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
