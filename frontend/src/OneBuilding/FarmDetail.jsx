import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import cookieIcon from '../../assets/troop/cookie.png';

const styles = StyleSheet.create({
  iconStyle: {
    width: 16,
    height: 16,
  },
  row: {
    flexDirection: 'row',
  },
});

function FarmDetail({ foodGenerateRate }) {
  return (
    <View style={styles.row}>
      <Text>The food </Text>
      <Image resizeMode="contain" source={cookieIcon} style={styles.iconStyle} />
      <Text>{` generate rate is ${foodGenerateRate}/minute. `}</Text>
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
