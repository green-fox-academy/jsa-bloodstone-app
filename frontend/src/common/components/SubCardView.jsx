import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import Colors from '../colors';

const defaultStyle = {
  marginBottom: 2,
  padding: 12,
  borderRadius: 5,
  alignSelf: 'stretch',
  backgroundColor: Colors.tealColor,
  flexDirection: 'row',
  shadowColor: '#fff',
};

function SubCardView({ style, children }) {
  return (
    <View style={[defaultStyle, style]}>
      {children}
    </View>
  );
}

SubCardView.propTypes = {
  style: ViewPropTypes.style,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

SubCardView.defaultProps = {
  style: null,
};

export default SubCardView;
