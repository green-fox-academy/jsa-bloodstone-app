import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import { CardView } from '../common/components';

import troopAvatar from '../../assets/troop/troop.png';
import crownIcon from '../../assets/crown.png';
import goldIcon from '../../assets/gold.png';

const styles = StyleSheet.create({
  container: {
    width: 275,
    marginHorizontal: 100,
    alignItems: 'center',
  },
  textStyle: {
    lineHeight: 32,
  },
  rankTextStyle: {
    fontWeight: 'bold',
    lineHeight: 32,
  },
  avatarStyle: {
    width: 64,
    height: 64,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  avatarMaskStyle: {
    marginTop: -48,
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function MyRankingItem({ ranking, gold, kingdom }) {
  return (
    <CardView style={styles.container}>
      <View style={styles.avatarMaskStyle}>
        <Image style={styles.avatarStyle} source={troopAvatar} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={styles.textStyle}>My ranking: </Text>
        <Text style={styles.rankTextStyle}>{ranking}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <Image style={styles.iconStyle} source={goldIcon} />
          <Text style={{ color: '#000' }}>{` ${gold}`}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
          <Image style={styles.iconStyle} source={crownIcon} />
          <Text style={{ color: '#000' }}>{` ${kingdom}`}</Text>
        </View>
      </View>
    </CardView>
  );
}

MyRankingItem.propTypes = {
  ranking: PropTypes.number,
  gold: PropTypes.number,
  kingdom: PropTypes.number,
};

MyRankingItem.defaultProps = {
  ranking: 1,
  gold: 0,
  kingdom: 0,
};

export default MyRankingItem;
