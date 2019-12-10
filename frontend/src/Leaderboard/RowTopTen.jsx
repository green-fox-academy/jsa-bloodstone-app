import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, Text,
  StyleSheet,
} from 'react-native';
import { SubCardView } from '../common/components';
import goldIcon from '../../assets/gold.png';
import crownIcon from '../../assets/crown.png';
import userAvatar from '../../assets/user-avatar.png';
import Colors from '../common/colors';

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: Colors.whiteColor,
  },
  userAvatar: {
    width: 28,
    height: 28,
    marginHorizontal: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 4,
  },
  rowFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
});

function RowTopTen({
  rank, username, gold, crown,
}) {
  return (
    <SubCardView style={styles.row}>
      <View style={styles.rowFlex}>
        <Text style={styles.text}>{rank}</Text>
        <Image style={styles.userAvatar} source={userAvatar} />
        <Text style={styles.text}>{username}</Text>
      </View>
      <View style={styles.rowFlex}>
        <View style={styles.userInfo}>
          <Image source={goldIcon} style={styles.icon} />
          <Text style={styles.text}>{gold}</Text>
        </View>
        <View style={styles.userInfo}>
          <Image source={crownIcon} style={styles.icon} />
          <Text style={styles.text}>{crown}</Text>
        </View>
      </View>
    </SubCardView>
  );
}

RowTopTen.propTypes = {
  rank: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  gold: PropTypes.number.isRequired,
  crown: PropTypes.number.isRequired,
};

export default RowTopTen;
