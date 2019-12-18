import React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import goldIcon from '../../assets/gold.png';

import commonStyles from './styles';

function MineDetail({ goldGenerateRate }) {
  return (
    <View style={commonStyles.row}>
      <Text style={commonStyles.textStyle}>The gold </Text>
      <Image resizeMode="contain" source={goldIcon} style={commonStyles.iconStyle} />
      <Text style={commonStyles.textStyle}>{` generate rate is ${goldGenerateRate}/minute. `}</Text>
    </View>
  );
}

MineDetail.propTypes = {
  goldGenerateRate: PropTypes.number,
};

MineDetail.defaultProps = {
  goldGenerateRate: 0,
};

export default MineDetail;
