import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Dimensions } from 'react-native';

const cardStyle = {
  marginBottom: 2,
  padding: 12,
  borderRadius: 5,
  alignSelf: 'stretch',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  flexDirection: 'row',
  shadowColor: '#fff',
  width: Dimensions.get('window').width,
};

function CardView({ style, children }) {
  return (
    <View style={[cardStyle, style]}>
      {children}
    </View>
  );
}

CardView.propTypes = {
  style: ViewPropTypes.style,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

CardView.defaultProps = {
  style: null,
};

export default CardView;
