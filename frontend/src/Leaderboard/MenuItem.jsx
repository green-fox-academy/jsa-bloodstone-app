import React from 'react';
import {
  View, Text, StyleSheet, TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../common/colors';

const styles = StyleSheet.create({
  itemStyle: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    color: Colors.greyColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

function MenuItem({
  title, active, onPress,
}) {
  const extraTextStyle = {
    color: title === active ? Colors.tealColor : Colors.greyColor,
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.itemStyle}>
        <Text style={[styles.textStyle, extraTextStyle]}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string,
  active: PropTypes.string,
  onPress: PropTypes.func,
};

MenuItem.defaultProps = {
  title: 'Title',
  active: 'Active',
  onPress: null,
};

export default MenuItem;
