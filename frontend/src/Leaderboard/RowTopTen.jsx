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
    fontSize: 21,
    color: Colors.whiteColor,
  },
  textBold: {
    fontSize: 21,
    color: Colors.whiteColor,
  },
  userAvatar: {
    width: 32,
    height: 32,
    marginLeft: 8,
    marginRight: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 21,
    height: 21,
    margin: 4,
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
        <Text style={styles.textBold}>{rank}</Text>
        <Image style={styles.userAvatar} source={userAvatar} />
        <Text style={styles.textBold}>{username}</Text>
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
