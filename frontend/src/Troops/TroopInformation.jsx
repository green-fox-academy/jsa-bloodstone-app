import React from 'react';
import {
  View, Image, Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { CardView } from '../common/components';
import troopAvatar from '../../assets/troop/troop-avatar.jpg';
import attackIcon from '../../assets/troop/attack.png';
import defenceIcon from '../../assets/troop/defence.png';
import cookieIcon from '../../assets/troop/cookie.png';
import Colors from '../common/colors';

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 12,
    justifyContent: 'space-between',
    // backgroundColor: '#ffffff66',
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: 'rgba(0,0,0,.12)',
  },
  // iconContainer: {
  //   paddingVertical: 2,
  //   paddingHorizontal: 10,
  //   borderRadius: 12,
  //   backgroundColor: '#ffffff66',
  //   borderWidth: StyleSheet.hairlineWidth,
  //   borderColor: 'rgba(0,0,0,.12)',
  // },
  textStyle: {
    fontSize: 13,
    color: Colors.blackColor,
    lineHeight: 20,
  },
  troopAvatar: {
    width: 80,
    height: 80,
    marginRight: 12,
    borderRadius: 10,
  },
  fieldStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: 14,
    height: 14,
    marginRight: 3,
  },
  iconContainer: {
    marginRight: 5,
    width: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: '#ffffff66',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0,0,0,.12)',
    // borderWidth: 1,
  },
});

function TroopInformation({ attack, defence, sustenance }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={styles.iconContainer}>
        <Image resizeMode="contain" source={attackIcon} style={styles.iconStyle} />
        <Text style={styles.textStyle}>{attack}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image resizeMode="contain" source={defenceIcon} style={styles.iconStyle} />
        <Text style={styles.textStyle}>{defence}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image resizeMode="contain" source={cookieIcon} style={styles.iconStyle} />
        <Text style={styles.textStyle}>{sustenance}</Text>
      </View>
    </View>
  );
}

TroopInformation.propTypes = {
  attack: PropTypes.number.isRequired,
  defence: PropTypes.number.isRequired,
  sustenance: PropTypes.number.isRequired,
};

export default TroopInformation;
