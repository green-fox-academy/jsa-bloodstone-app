import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import goldIcon from '../../assets/gold.png';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: 16,
    height: 16,
  },
  textStyle: {
    lineHeight: 24,
  },
});

function MineDetail({ goldGenerateRate }) {
  return (
    <View style={styles.row}>
      <Text styles={styles.textStyle}>The gold </Text>
      <Image resizeMode="contain" source={goldIcon} style={styles.iconStyle} />
      <Text styles={styles.textStyle}>{` generate rate is ${goldGenerateRate}/minute. `}</Text>
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
