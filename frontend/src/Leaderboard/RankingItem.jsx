import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { SubCardView } from '../common/components';

import troopAvatar from '../../assets/troop/troop.png';
import crownIcon from '../../assets/crown.png';
import goldIcon from '../../assets/gold.png';
import colors from '../common/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  triangle: {
    borderWidth: 10,
    borderTopColor: colors.transparent,
    borderBottomColor: colors.transparent,
  },
  rankTextStyle: {
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 10,
  },
  avatarStyle: {
    width: 48,
    height: 48,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  leftMargin: {
    marginStart: 15,
  },
  rightMargin: {
    marginEnd: 15,
  },
  headerTextStyle: {
    fontSize: 15,
    maxWidth: 130,
    color: 'white',
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'white',
  },
});

function RankingItem({
  ranking, gold, kingdom,
  direction, disabled,
}) {
  const extraContainerStyle = {
    flexDirection: direction === 'right' ? 'row-reverse' : 'row',
    backgroundColor: disabled ? 'gray' : colors.tealColor,
  };
  const extraColor = disabled ? 'gray' : colors.tealColor;
  const extraTriangleStyle = {
    borderLeftColor: direction === 'right' ? extraColor : 'transparent',
    borderRightColor: direction === 'left' ? extraColor : 'transparent',
    marginLeft: direction === 'left' ? -30 : 0,
    marginRight: direction === 'right' ? -30 : 0,
  };

  return (
    <SubCardView style={[styles.container, extraContainerStyle]}>
      <View style={[styles.triangle, extraTriangleStyle]} />
      <Text style={styles.rankTextStyle}>{ranking}</Text>
      <Image source={troopAvatar} resizeMode="contain" style={styles.avatarStyle} />
      <View style={direction === 'right' ? styles.rightMargin : styles.leftMargin}>
        <Text numberOfLines={1} style={styles.headerTextStyle}>The Incredible</Text>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <Image style={styles.iconStyle} source={goldIcon} />
            <Text style={styles.textStyle}>{` ${gold}`}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <Image style={styles.iconStyle} source={crownIcon} />
            <Text style={styles.textStyle}>{` ${kingdom}`}</Text>
          </View>
        </View>
      </View>
    </SubCardView>
  );
}

RankingItem.propTypes = {
  ranking: PropTypes.number,
  gold: PropTypes.number,
  kingdom: PropTypes.number,
  direction: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
};

RankingItem.defaultProps = {
  ranking: 1,
  gold: 0,
  kingdom: 0,
  direction: 'left',
  disabled: false,
};

export default RankingItem;
