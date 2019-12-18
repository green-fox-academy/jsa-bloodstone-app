import React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import cookieIcon from '../../assets/troop/cookie.png';

import commonStyles from './styles';

function FarmDetail({ foodGenerateRate }) {
  return (
    <View style={commonStyles.row}>
      <Text style={commonStyles.textStyle}>The food </Text>
      <Image resizeMode="contain" source={cookieIcon} style={commonStyles.iconStyle} />
      <Text style={commonStyles.textStyle}>{` generation rate is ${foodGenerateRate}/minute. `}</Text>
    </View>
  );
}

FarmDetail.propTypes = {
  foodGenerateRate: PropTypes.number,
};

FarmDetail.defaultProps = {
  foodGenerateRate: 0,
};

export default FarmDetail;
