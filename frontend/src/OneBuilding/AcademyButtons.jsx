import React from 'react';
import {
  View, Text, Image, StyleSheet, TouchableHighlight,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { SubCardView } from '../common/components';
import goldIcon from '../../assets/gold.png';
import troopIcon from '../../assets/troop/troop.png';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  upgradeButtonGroup: {
    flexDirection: 'column',
  },
  textStyle: {
    fontSize: 14,
    color: '#fff',
  },
  iconStyle: {
    width: 16,
    height: 16,
  },
});

function AcademyButtons({ createTroops, upgrade }) {
  return (
    <View style={styles.upgradeButtonGroup}>
      <TouchableHighlight onPress={createTroops}>
        <SubCardView style={{ height: 55 }}>
          <Image resizeMode="contain" source={troopIcon} style={{ width: 28, height: 28 }} />
          <View style={{ flex: 1 }}>
            <Text style={styles.textStyle}> create troop level 1</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={styles.textStyle}>  10 </Text>
              <Image resizeMode="contain" source={goldIcon} style={styles.iconStyle} />
              <Text style={styles.textStyle}> 1:00</Text>
            </View>
          </View>
        </SubCardView>
      </TouchableHighlight>
      <TouchableHighlight onPress={upgrade}>
        <SubCardView style={{ height: 55 }}>
          <View>
            <Entypo name="arrow-with-circle-up" size={28} color="white" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.textStyle}> Upgrade to Level 2</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={styles.textStyle}>  200 </Text>
              <Image resizeMode="contain" source={goldIcon} style={styles.iconStyle} />
              <Text style={styles.textStyle}> 2:30</Text>
            </View>
          </View>
        </SubCardView>
      </TouchableHighlight>
    </View>
  );
}

AcademyButtons.propTypes = {
  createTroops: PropTypes.func,
  upgrade: PropTypes.func,
};

AcademyButtons.defaultProps = {
  createTroops: null,
  upgrade: null,
};

export default AcademyButtons;
