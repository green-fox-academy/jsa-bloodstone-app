import React from 'react';
import {
  View, Text, TouchableNativeFeedback, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../common/colors';

const styles = StyleSheet.create({
  menuItemStyle: {
    flex: 1,
    paddingVertical: 12,
  },
  menuTextStyle: {
    fontSize: 14,
    color: colors.greyColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

function MenuItem({
  title, active, onPress,
}) {
  const extraMenuItemStyle = {
    backgroundColor: title === active ? colors.greyColor : colors.transparent,
  };
  const extraMenuTextStyle = {
    color: title === active ? colors.whiteColor : colors.greyColor,
  };

  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.SelectableBackground()}
    >
      <View style={[styles.menuItemStyle, extraMenuItemStyle]}>
        <Text style={[styles.menuTextStyle, extraMenuTextStyle]}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
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
