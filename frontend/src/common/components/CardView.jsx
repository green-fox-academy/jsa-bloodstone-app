import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import commonStyles from '../styles';

function CardView({ style, children }) {
  return (
    <View style={[commonStyles.cardStyle, style]}>
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
