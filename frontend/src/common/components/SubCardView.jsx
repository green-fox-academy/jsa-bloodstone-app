import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import commonStyles from '../styles';

function SubCardView({ style, children }) {
  return (
    <View style={[commonStyles.subCardStyle, style]}>
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
