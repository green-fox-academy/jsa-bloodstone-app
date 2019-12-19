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
  textStyle: {
    lineHeight: 32,
  },
  rankTextStyle: {
    fontWeight: 'bold',
    lineHeight: 32,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatarStyle: {
    width: 64,
    height: 64,
    marginTop: -48,
  },
});

function MyRankItem({ ranking }) {
  return (
    <CardView style={{ width: 275, marginHorizontal: 100 }}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatarStyle} source={troopAvatar} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={styles.textStyle}>My ranking: </Text>
        <Text style={styles.rankTextStyle}>{ranking}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <Image style={{ width: 20, height: 20 }} source={goldIcon} />
          <Text style={{ color: '#000' }}> 200</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
          <Image style={{ width: 20, height: 20 }} source={crownIcon} />
          <Text style={{ color: '#000' }}> 200</Text>
        </View>
      </View>
    </CardView>
  );
}

MyRankItem.propTypes = {
  ranking: PropTypes.number,
};

MyRankItem.defaultProps = {
  ranking: 1,
};


export default MyRankItem;
