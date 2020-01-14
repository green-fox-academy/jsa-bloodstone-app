import React from 'react';
import {
  View, StyleSheet, Text, ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../common/colors';

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: '#ffffff66',
  },
  textStyle: {
    fontSize: 12,
    color: Colors.blackColor,
    lineHeight: 20,
  },
});

function IconText({
  icon, text, style, textStyle,
}) {
  return (
    <View style={[styles.container, style]}>
      {icon}
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </View>
  );
}

IconText.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
};

IconText.defaultProps = {
  icon: null,
  text: '',
  style: null,
  textStyle: null,
};


export default IconText;
