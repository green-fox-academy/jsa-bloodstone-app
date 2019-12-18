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
    borderRadius: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  triangle: {
    borderWidth: 10,
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
  leftMargin: {
    marginStart: 15,
  },
  rightMargin: {
    marginEnd: 15,
  },
});

function RankItem({ ranking, direction, disabled }) {
  const extraContainerStyle = {
    flexDirection: direction === 'right' ? 'row-reverse' : 'row',
    backgroundColor: disabled ? 'gray' : colors.tealColor,
  };
  const extraColor = disabled ? 'gray' : colors.tealColor;
  const extraTriangleStyle = {
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
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
        <Text style={{ fontSize: 15, color: 'white' }}>The Incredibles</Text>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <Image style={{ width: 20, height: 20 }} source={goldIcon} />
            <Text style={{ color: 'white' }}> 200</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <Image style={{ width: 20, height: 20 }} source={crownIcon} />
            <Text style={{ color: 'white' }}> 200</Text>
          </View>
        </View>
      </View>
    </SubCardView>
  );
}

RankItem.propTypes = {
  ranking: PropTypes.number,
  direction: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
};

RankItem.defaultProps = {
  ranking: 1,
  direction: 'left',
  disabled: false,
};

export default RankItem;
