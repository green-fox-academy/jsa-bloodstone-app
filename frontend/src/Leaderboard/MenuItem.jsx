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
    alignItems: 'center',
  },
  menuTextStyle: {
    fontSize: 14,
    color: colors.greyColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  activeIndicatorStyle: {
    backgroundColor: colors.blueColor,
    marginTop: 4,
    marginBottom: -8,
    height: 4,
    width: 8,
    borderRadius: 4,
  },
});

function MenuItem({
  title, active, onPress,
}) {
  const extraMenuTextStyle = {
    color: title === active ? colors.tealColor : colors.greyColor,
  };
  const indicatorColor = {
    backgroundColor: title === active ? colors.tealColor : colors.transparent,
  };
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.SelectableBackground()}
    >
      <View style={[styles.menuItemStyle]}>
        <Text style={[styles.menuTextStyle, extraMenuTextStyle]}>{title}</Text>
        <View style={[styles.activeIndicatorStyle, indicatorColor]} />
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
