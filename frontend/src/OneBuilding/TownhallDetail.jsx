import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import troopIcon from '../../assets/troop/troop.png';
import cookieIcon from '../../assets/troop/cookie.png';
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

function TownhallDetail({ troops, food, gold }) {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.textStyle}>{`You have ${troops} `}</Text>
        <Image resizeMode="contain" source={troopIcon} style={styles.iconStyle} />
        <Text style={styles.textStyle}> troops.</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textStyle}>{`You have ${food} `}</Text>
        <Image resizeMode="contain" source={cookieIcon} style={styles.iconStyle} />
        <Text style={styles.textStyle}> food.</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textStyle}>{`You have ${gold} `}</Text>
        <Image resizeMode="contain" source={goldIcon} style={styles.iconStyle} />
        <Text style={styles.textStyle}> gold.</Text>
      </View>
    </View>
  );
}

TownhallDetail.propTypes = {
  troops: PropTypes.number,
  food: PropTypes.number,
  gold: PropTypes.number,
};

TownhallDetail.defaultProps = {
  troops: 0,
  food: 0,
  gold: 0,
};

export default TownhallDetail;
